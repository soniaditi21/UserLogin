import express from 'express';
import { userSignup,userLoginIn } from '../controller/user-controller.js';


const router = express.Router();


//signup is a post api so this function will save4 data to mongodb
router.post('/signup',userSignup);
router.post('/login',userLoginIn);

export default router;