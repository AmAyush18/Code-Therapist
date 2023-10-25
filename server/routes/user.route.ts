import express from "express";
import { activateUser, loginUser, logoutUser, registrationUser, updateAcessToken } from "../controllers/user.controller";
import { isAuthenticated } from "../middleware/auth";

const userRouter = express.Router();

userRouter.post('/registration', registrationUser);
userRouter.post('/activate-user', activateUser);
userRouter.post('/login', loginUser);
userRouter.get('/logout', isAuthenticated, logoutUser);
userRouter.get('/refreshtoken', updateAcessToken);


export default userRouter;