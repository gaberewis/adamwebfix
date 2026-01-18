import express from 'express';
const app = express();
import * as dotenv from 'dotenv';
dotenv.config();
import errorHandler from './middleware/errorHandler.js';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cloudinary from 'cloudinary';
import helmet from 'helmet';



import productRoute from './routes/products.js';
import authRoute from './routes/auth.js';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';



cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

 //app.use(express.static(path.resolve(__dirname, './client/dist')));
app.use(cookieParser());
app.use(express.json());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https://res.cloudinary.com"],
     
    },
  })
);


app.get('/', (req, res) => {
  res.send('Hello Worllld');
});

app.use('/pnwx/auth', authRoute);
app.use('/pnwx/products',productRoute);

// app.get(/.*/, (req, res) => {
//   res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
// });

app.use(/.*/, (req, res) => {
  res.status(404).json({ msg: 'not found' });
});



app.use(errorHandler);


  const port = process.env.PORT || 5100;

  try{
  await mongoose.connect(process.env.MONGO_URI);
  app.listen(port, () => {
  console.log(`server running on PORT ${port}....`);
    console.log('connected to DB successfuly');
})
}catch(error){
   console.log(error);
  process.exit(1);
  }


//  PORT=5100
//  NODE_ENV=development
//  MONGO_URI=mongodb+srv://pnwx:143212@pnwx.zbjezpr.mongodb.net/pnwx
//  JWT_SECRET=gaber143adam
//  JWT_EXPIRE=1d
//  CLOUDINARY_CLOUD_NAME=dk4ictbos
//  CLOUDINARY_API_KEY=126768646293766    
//  CLOUDINARY_API_SECRET=SSWvEtLN1znVkNDs0bVyg87Y_Ek



