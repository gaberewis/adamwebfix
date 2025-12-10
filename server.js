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



import ProudctRoute from './routes/Proudcts.js';
import authRoute from './routes/auth.js';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { authenticateUser } from './middleware/funcs.js';


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

 app.use(express.static(path.resolve(__dirname, './client/dist')));
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

app.use('/auth', authRoute);
app.use('/Proudcts', authenticateUser, ProudctRoute);

app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
});

app.use(/.*/, (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

app.use(errorHandler);


  const port = process.env.PORT || 5100;

  try{
  await mongoose.connect(process.env.MON_DB);
  app.listen(port, () => {
  console.log(`server running on PORT ${port}....`);
    console.log('connected to DB successfuly');
})
}catch(error){
   console.log(error);
  process.exit(1);
  }









