import express from "express";
import Joi from 'joi'
import jwt from "jsonwebtoken";

// import validateJWT from '../../middleware/validateJWT'

// import fsPromises from 'fs/promises'

require('dotenv').config()

// Utility Functions
import { comparePassword } from "../utils/auth";

// Controller Function
import { createUser, createUserValidationEmail } from "../controllers/user";

const router = express.Router();

// router.get("/", function (req, res) {
//   res.send("Wiki home page");
// });

router.post("/create", async (req, res, next) => {
  try {

    const schema = Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      document: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      phone: Joi.string().required(),
      bornDate: Joi.date().required(),
      role: Joi.string().required(),
    })

    const {value, error} = schema.validate(req.body);

    if (error) return res.status(400).json({'message': error})
    
    const dataUserResp = await createUser(value)
    const dataRespEmail = createUserValidationEmail({ userId: dataUserResp.id, email: dataUserResp.email })

    console.log('resp', { userId: dataUserResp.user_id, email: dataUserResp.email })
    
    return res.status(200).json({ userId: dataUserResp.id, email: dataUserResp.email });
  } catch (error) {
    console.log('error', error)
  }
});

module.exports = router;