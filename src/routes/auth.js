import express from "express";
import Joi from 'joi'
import jwt from "jsonwebtoken";

// import validateJWT from '../../middleware/validateJWT'

// import fsPromises from 'fs/promises'

require('dotenv').config()

// Utility Functions
import { comparePassword } from "../utils/auth";

// Controller Function
import { getUser } from "../controllers/user";

const router = express.Router();

// router.get("/", function (req, res) {
//   res.send("Wiki home page");
// });

router.post("/login", async (req, res, next) => {
  try {

    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    })

    const {value, error} = schema.validate(req.body);

    if (error) return res.status(400).json({'message': error})

    const user = await getUser(value.email)

    if (!user) return res.status(401).json({'message': 'User Not Found'})

    const paswordMatch = await comparePassword(value.password, user.password)
    
    if (!paswordMatch) return res.status(401).json({error: "Authentication Failed"})

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email, 
        role: user.role 
      },
      'bacon',
      { expiresIn: '1d' }
    )

    const resUSer = {
      name: user.name,
      email: user.email,
      role: user.role
    }

    return res.json({ accessToken: token, user: resUSer });
  } catch (error) {
    console.log('error', error)
  }
});

router.post("/email/validation", async (req, res, next) => {
  try {

    const schema = Joi.object({
      email: Joi.string().email().required(),
      userId: Joi.string().required(),
      code: Joi.string().required(),
    })

    const {value, error} = schema.validate(req.body);

    if (error) return res.status(400).json({'message': error})
    
    console.log('Deu tudo certo', value)

    return res.status(200)
  } catch (error) {
    console.log('error', error)
  }
});

module.exports = router;