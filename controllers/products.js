import Product from '../models/Product.js';
import cloudinary from 'cloudinary';
import { formatImage } from '../middleware/multer.js';
import User from '../models/User.js';


export const getproducts = async (req, res) => {

  const { sort, section, catagory, search } = req.query;

  let user = User.findById(req.user.userId);

  const queryFields = { createdBy: req.user.userId };

  if (search) {
    queryFields.$or = [
      { name: { $regex: search, $options: 'i' } },
    ]
  };

  if (section) queryFields.section = section;
  if (catagory) queryFields.catagory = catagory;

  const limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 1;
  const skip = (page - 1) * limit;

  const sortFields = {
    newproducts: '-createdAt',
    oldproducts: 'createdAt',
    aToz: 'position',
    zToa: '-position'
  }
  const sortDocs = sortFields[sort] || sortFields.newproducts;
  const products = await Product.find(queryFields).limit(limit).sort(sortDocs).skip(skip);
  const totalproducts = await Product.countDocuments(queryFields);
  const pages = Math.ceil(totalproducts / limit);

  res.status(200).json({ products, page, pages, totalproducts, user });

};

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

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const newProduct = { ...req.body }
  let uploadedImages = [];

  if (req.files && req.files.length > 0) {

    uploadedImages = await Promise.all(
      req.files.map((image) => {
      return  cloudinary.v2.uploader.upload(formatImage(image))
      }));
    newProduct.images = uploadedImages.map((img) => ({
      imageUrl: img.secure_url,
      imageId: img.public_id,
    }));

    const updatedProduct = await Product.findByIdAndUpdate(id, newProduct);

    if (!updatedProduct) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    if (updatedProduct.images && updatedProduct.images.length > 0) {
      for (const img of updatedProduct.images) {
        await cloudinary.v2.uploader.destroy(img.imageId);
      }
    }
    res.status(200).json({ msg: 'product updated' });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  const Product = await Product.findById(id);
  res.status(200).json({ Product });
};

export const deleteProduct = async (req, res) => {

  const { id } = req.params;
  const removedProduct = await Product.findByIdAndDelete(id);
  res.status(200).json({ msg: 'Product deleted' });

};




