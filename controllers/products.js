import Product from '../models/Product.js';
import cloudinary from 'cloudinary';
import { formatImage } from '../middleware/multer.js';




export const craeteProduct = async (req, res) => {
  let uploadedImages = [];
  const files = req.files || []; // always safe
  if (files && files.length > 0) {
    uploadedImages = await Promise.all(
      req.files.map((image) => {
        return cloudinary.v2.uploader.upload(
          formatImage(image)
        );
      })
    );
  }


  req.body.images = uploadedImages.map((img) => ({
    imageUrl: img.secure_url,
    imageId: img.public_id,
  }));


  const product = await Product.create(req.body);

  res.status(201).json({ msg: 'Product created', product });
};



export const getproducts = async (req, res) => {
  const { category, search, popular, loadmore } = req.query;
  const queryFields = {};
  if (search) queryFields.name = { $regex: search, $options: 'i' };
  if (category) queryFields.category = category;
  if (popular) queryFields.popular = popular;


  const limit = Number(loadmore) || 20;

  const products = await Product.find(queryFields).limit(limit).sort({ _id: -1 });

  const totalproducts = await Product.countDocuments(queryFields);

  res.status(200).json({ products, totalproducts, popular, limit });

};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json({ product });
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    // 1. Find product first
    const existingProduct = await Product.findById(id);
    if (!existingProduct) {
      return res.status(404).json({ msg: "Product not found" });
    }

    // 2. Delete images from Cloudinary
    if (existingProduct.images && existingProduct.images.length > 0) {
      await Promise.all(
        existingProduct.images.map((image) =>
          cloudinary.v2.uploader.destroy(image.imageId)
        )
      );
    }

    // 3. Delete product from DB
    await Product.findByIdAndDelete(id);

    res.status(200).json({ msg: "Product deleted" });

  } catch (err) {
    console.error("Delete product error:", err);
    res.status(500).json({ msg: "Delete failed" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const newProduct = { ...req.body };
  const files = req.files || [];

  try {
    // 1. Get existing product first
    const existingProduct = await Product.findById(id);
    if (!existingProduct) {
      return res.status(404).json({ msg: "Product not found" });
    }

    let uploadedImages = [];

    // 2. Upload new images if exist
    if (files.length > 0) {
      uploadedImages = await Promise.all(
        files.map((file) =>
          cloudinary.v2.uploader.upload(formatImage(file))
        )
      );

      newProduct.images = uploadedImages.map((img) => ({
        imageUrl: img.secure_url,
        imageId: img.public_id,
      }));

      // 3. Delete OLD images (not new ones)
      if (existingProduct.images && existingProduct.images.length > 0) {
        await Promise.all(
          existingProduct.images.map((image) =>
            cloudinary.v2.uploader.destroy(image.imageId)
          )
        );
      }
    }

    // 4. Update product
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      newProduct,
    );

    res.status(200).json({
      msg: "Product updated",
      product: updatedProduct,
    });

  } catch (err) {
    console.error("Update product error:", err);
    res.status(500).json({ msg: "Update failed" });
  }
};












