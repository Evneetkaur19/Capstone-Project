import { v2 as cloudinary} from "cloudinary"
import serviceModel from "../models/serviceModel.js"
import { jwt } from 'jsonwebtoken'

// API for adding service
const addService = async (req,res) => {
    
    try {
       const { name, services, about, prices, email} = req.body
       const imageFile = req.file

       console.log({name, services, about, prices, email},imageFile)

       
       //-------------------checking for all data to add service
       if(!name || !services || !about || !prices ||!email){
        return res.json({success:false,message:"Missing Details"})
       }

       // Check if email already exists
        const existingService = await serviceModel.findOne({ email });
        if (existingService) {
        return res.json({ success: false, message: "Email already exists" });
       }

       // upload image to cloudinary
       const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
       const imageUrl = imageUpload.secure_url

       const serviceData = {
        name,
        image:imageUrl,
        services,
        about,
        prices,
        email,
        date:Date.now()
       }
       const newService = new serviceModel(serviceData)
       await newService.save()

       res.json({sucess:true,message:"Service Added"})

    } catch (error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// API For admin login

  const loginAdmin = async (req,res) =>{
    try{
        const {email,password} = req.body
        if(email === process.env.ADMIN_EMAIL && 
            password === process.env.ADMIN_PASSWORD){
                const token = jwt.sign(email+password,process.env.JWT_SECRET)
                res.json({success:true,token})
        } else{
            res.json({success:false,message:"Invalid credentials"})
        }
    } catch (error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
  }

export {addService, loginAdmin}