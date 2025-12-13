import Proudct from '../models/Proudct.js';
import mongoose from 'mongoose';
import day from 'dayjs';
import cloudinary from 'cloudinary';
import { formatImage } from '../middleware/multer.js';


export const getproducts = async (req, res) => {

  const { sort, section, catagory, search } = req.query;

  const queryFields = { createdBy: req.user.userId };

  if (search) {queryFields.$or = [
    { name: { $regex: search, $options: 'i' } },
  ]};

  if (section ) queryFields.section = section;
  if (catagory ) queryFields.catagory = catagory;

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

  const products = await Proudct.find(queryFields).limit(limit).sort(sortDocs).skip(skip);
  const totalproducts = await Proudct.countDocuments(queryFields);
  const pages = Math.ceil(totalproducts / limit);

  res.status(200).json({ products, page, pages, totalproducts });

}


export const craeteProudct = async (req, res) => {
 
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

    const product = await Proudct.create(req.body);

    res.status(201).json({ msg: 'Product created' });

};

export const updateProudct = async (req, res) => {

const { id } = req.params;
const newProduct = {...req.body}

if(req.files && req.files.length > 0 ){

  const uploadedImages = await Promise.all(
    req.files.map((image)=>{
      cloudinary.v2.uploader.upload(formatImage(image))
    }));

    newProduct.images = uploadedImages.map((img)=>({
     imageUrl : img.secure_url,
     imageId : img.public_id,
    }));

  const updatedProudct = await Proudct.findByIdAndUpdate(id, newProduct, { new: true });

 if (!updatedProduct) {
      return res.status(404).json({ msg: 'Product not found', updatedProduct });
    }


if (updatedProudct.images && updatedProudct.images.length > 0) {
  for (const img of updatedProudct.images) {
    await cloudinary.v2.uploader.destroy(img.imageId);
  }
}
  res.status(200).json({ msg : 'product updated'});
}

};

export const getProudct = async (req, res) => {
  const { id } = req.params;
  const Proudct = await Proudct.findById(id);
  res.status(200).json({ Proudct });
};


export const deleteProudct = async (req, res) => {

  const { id } = req.params;
  const removedProudct = await Proudct.findByIdAndDelete(id);
  res.status(200).json({ msg: 'Proudct deleted' });

};

export const showStates = async (req, res) => {

  let stats = await Proudct.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$productstatus', count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});
  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };


  let monthlyChart = await Proudct.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 }
      }
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } }

  ]);

  monthlyChart = monthlyChart.map(item => {

    const { _id: { year, month }, count } = item;

    const date = day().month(month - 1).year(year).format('MMM YY');
    return { date, count };

  });


  res.status(200).json({ defaultStats, monthlyChart });

};




