import express from 'express';
import { addService, loginAdmin } from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';

const adminRoute = express.Router();

adminRoute.post('/add-service',authAdmin,upload.single('image'),addService)
adminRoute.post('/login',loginAdmin);


export default adminRoute;
