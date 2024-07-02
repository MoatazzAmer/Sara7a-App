import { Router } from "express";
import { logIn, signUp } from "./user.controller.js";
import { validate } from "../../middleWare/validation.js";
import { signInVal, signUpVal } from "./user.validate.js";
import { checkEmail } from "../../middleWare/checkEmailExists.js";




const userRouter = Router();


userRouter.post('/signup' ,validate(signUpVal),checkEmail,signUp)
userRouter.post('/signin' ,validate(signInVal),logIn)

export default userRouter