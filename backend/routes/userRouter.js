import express from "express";
import { loginUser, signUpUser, allUsers } from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.post('/login', loginUser);
userRouter.post('/signUp', signUpUser);
userRouter.get('/', allUsers);
export default userRouter;
