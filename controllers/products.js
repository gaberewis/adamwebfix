import Product from '../models/Product.js';
import cloudinary from 'cloudinary';
import { formatImage } from '../middleware/multer.js';
import User from '../models/User.js';





export const craeteProduct = async (req, res) => {

  let uploadedImages = [];

  if (req.files && req.files.length > 0) {
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

  if (req.body.category) {
    req.body.category = req.body.category.trim();
  }

  const product = await Product.create(req.body);

  res.status(201).json({ msg: 'Product created' });
};



export const getproducts = async (req, res) => {

  const { section, catagory, search, skipProducts } = req.query;

  const queryFields = {};

  if (search) queryFields.name = { $regex: search, $options: 'i' };
  if (section) queryFields.section = section;
  if (catagory) queryFields.catagory = catagory;

  const limit = Number(req.query.limit) || 24;

  const skip = Number(req.query.skip )|| 0;

const products = await Product.find(queryFields).limit(limit).skip(skip);
 
  const totalproducts = await Product.countDocuments(queryFields);
  

  res.status(200).json({ products, totalproducts });

};




// export const updateProduct = async (req, res) => {
//   const { id } = req.params;
//   const newProduct = { ...req.body };

//   let uploadedImages = [];

//   if (req.files && req.files.length > 0) {
//     uploadedImages = await Promise.all(
//       req.files.map((image) =>
//         cloudinary.v2.uploader.upload(formatImage(image))
//       )
//     );

//     newProduct.images = uploadedImages.map((img) => ({
//       imageUrl: img.secure_url,
//       imageId: img.public_id,
//     }));
//   }

//   const updatedProduct = await Product.findByIdAndUpdate(id, newProduct);

//   if (!updatedProduct) {
//     return res.status(404).json({ msg: 'Product not found' });
//   }

//   // delete old images ONLY if new ones were uploaded
//   if (uploadedImages.length > 0 && updatedProduct.images?.length > 0) {
//     for (const img of updatedProduct.images) {
//       await cloudinary.v2.uploader.destroy(img.imageId);
//     }
//   }

//    res.status(200).json({
//     msg: 'Product updated',
    
//   });
// };



export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const newProduct = { ...req.body };
  const files = req.files || []; // always safe

  try {
    let uploadedImages = [];

    if (files.length > 0) {
      uploadedImages = await Promise.all(
        files.map(file => cloudinary.v2.uploader.upload(formatImage(file)))
      );

      newProduct.images = uploadedImages.map(img => ({
        imageUrl: img.secure_url,
        imageId: img.public_id,
      }));
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, newProduct, { new: true });
    if (!updatedProduct) return res.status(404).json({ msg: 'Product not found' });

    res.status(200).json({ msg: 'Product updated', product: updatedProduct });
  } catch (err) {
    console.error("Update product error:", err);
    res.status(500).json({ msg: "Update failed" });
  }
};




// export const updateProduct = async (req, res) => {
//   const { id } = req.params;
//   const newProduct = { ...req.body }
//   let uploadedImages = [];

//   if (req.files && req.files.length > 0) {

//     uploadedImages = await Promise.all(
//       req.files.map((image) => {
//         return cloudinary.v2.uploader.upload(formatImage(image.path))
//       }));
//     newProduct.images = uploadedImages.map((img) => ({
//       imageUrl: img.secure_url,
//       imageId: img.public_id,
//     }));}

//     const updatedProduct = await Product.findByIdAndUpdate(id, newProduct);

//     if (!updatedProduct) {
//       return res.status(404).json({ msg: 'Product not found' });
//     }

//     if (updatedProduct.images && updatedProduct.images.length > 0) {
//       for (const img of updatedProduct.images) {
//         await cloudinary.v2.uploader.destroy(img.imageId);
//       }
//     }
  

//     res.status(200).json({ msg: 'product updated' });
// };









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
  const removedProduct = await Product.findByIdAndDelete(id);
  res.status(200).json({ msg: 'Product deleted' });

};




