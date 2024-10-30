import express from 'express'
import  { serList} from "../controllers/serviceController.js";

const serRouter = express.Router()
serRouter.get('/list', serList)

export default serRouter
