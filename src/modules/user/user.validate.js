import Joi from "joi";


const signUpVal = Joi.object({
    userName: Joi.string().min(3).max(10).required(),
    email : Joi.string().email().required(),
    password : Joi.string().pattern(/^[A-Z][a-z0-9A-Z]{8,40}$/).required(),
    rePassword : Joi.valid(Joi.ref('password')).required()

});

const signInVal = Joi.object({
    email :Joi.string().email().required(),
    password : Joi.string().pattern(/^[A-Z][a-z0-9A-Z]{8,40}$/).required()
})
export{
    signUpVal,
    signInVal
}