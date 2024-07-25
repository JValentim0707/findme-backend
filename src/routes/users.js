import express from "express";
import Joi from 'joi'
import jwt from "jsonwebtoken";

// import validateJWT from '../../middleware/validateJWT'

// import fsPromises from 'fs/promises'

require('dotenv').config()

// Utility Functions
import { comparePassword } from "../utils/auth";

// Controller Function
import { createUser } from "../controllers/user";

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
    
    const dataResp = await createUser(value)

    console.log('resp', dataResp)
    
    return res.status(200).json({ message: 'Success Create'});
  } catch (error) {
    console.log('error', error)
  }
});

module.exports = router;