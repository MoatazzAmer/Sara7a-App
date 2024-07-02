import Joi from "joi";


const addmsgVal = Joi.object({
    content :Joi.string().min(4).max(1000).required(),
    receiverId : Joi.string().min(24).max(24).required()

})

export{
    addmsgVal
}