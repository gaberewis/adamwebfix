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

if(req.file){
  const response = await cloudinary.v2.uploader.upload(formatImage(req.file));
  req.body.image = response.secure_url;
  req.body.imageId = response.public_id;

}
   if (req.body.category) {
      req.body.category = req.body.category.trim();
    }
  const Proudct = await Proudct.create(req.body);
  res.status(201).json({ msg: 'Proudcte created'})
};



//check for download one or more images
// export const createProduct = async (req, res) => {
//   try {
//     // -----------------------------
//     // 1. If only ONE image is uploaded
//     // -----------------------------
//     if (req.file) {
//       const upload = await cloudinary.v2.uploader.upload(
//         formatImage(req.file)
//       );

//       req.body.image = upload.secure_url;
//       req.body.imageId = upload.public_id;
//     }

//     // -----------------------------
//     // 2. If MULTIPLE images uploaded (req.files)
//     // -----------------------------
//     if (req.files && req.files.length > 0) {
//       req.body.images = [];

//       for (let file of req.files) {
//         const upload = await cloudinary.v2.uploader.upload(formatImage(file));

//         req.body.images.push({
//           imageUrl: upload.secure_url,
//           imageId: upload.public_id,
//         });
//       }
//     }







export const getProudct = async (req, res) => {
  const { id } = req.params;
  const Proudct = await Proudct.findById(id);
  res.status(200).json({ Proudct });
};

export const updateProudct = async (req, res) => {



const newProduct = {...req.body}

if(req.file){
  const response = await cloudinary.v2.uploader.upload(formatImage(req.file));
  newProduct.image = response.secure_url;
  newProduct.imageId = response.public_id;
}
  const { id } = req.params;
  const updatedProudct = await Proudct.findByIdAndUpdate(id, newProduct);
if(req.file && updatedProudct.imageId){
  await cloudinary.v2.uploader.destroy(updateProudct.imageId)
}

  res.status(200).json({ msg : 'product updated'});
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




 // export const updateUser = async (req, res) => {
//   const newUser = { ...req.body };
//   delete newUser.password;
//   if (req.file) {
   
//     const response = await cloudinary.v2.uploader.upload(formatImage(req.file));

//     newUser.avatar = response.secure_url;
//     newUser.avatarPublicId = response.public_id;
//   }
//   const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);

//   if (req.file && updatedUser.avatarPublicId) {
//     await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
//   }
//   res.status(200).json({ msg: 'update user' });
// };
