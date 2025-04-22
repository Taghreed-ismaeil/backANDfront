import express from "express";
const userRouter = express.Router();
import { loginUser, signUpUser } from '../controllers/userController.js';
userRouter.post('/login', loginUser);
userRouter.post('/signUp', signUpUser);
export default userRouter;
