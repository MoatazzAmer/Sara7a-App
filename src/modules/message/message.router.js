import { verifyToken } from "../../middleWare/verifyToken.js";

import { Router } from'express';
import { addMesg, deletemesg, getAllMess } from "./message.controller.js";
import { validate } from "../../middleWare/validation.js";
import { addmsgVal } from "./message.validate.js";




const msgRouter = Router();

msgRouter.use(verifyToken)

msgRouter.post('/',validate(addmsgVal),addMesg);
msgRouter.get('/',getAllMess);
msgRouter.delete('/:id',deletemesg)

export default msgRouter