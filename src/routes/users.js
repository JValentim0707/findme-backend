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
import { updateUserDetails } from "../controllers/userDetails";
import { getAllApproves, updateApproves } from "../controllers/userApproves";

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

router.put("/details", async (req, res, next) => {
  try {

    const schema = Joi.object({
      userId: Joi.string().required(),
      postcode: Joi.string().required(),
      street: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      district: Joi.string().required(),
      number: Joi.string().required(),
      complement: Joi.string().required(),
    })

    const {value, error} = schema.validate(req.body);

    if (error) return res.status(400).json({'message': error})

    const objectUser = {
      postcode: value.postcode,
      street: value.street,
      city: value.city,
      state: value.state,
      district: value.district,
      number: value.number,
      complement: value.complement,
    }

    const resp = await updateUserDetails(value.userId, objectUser)
    
    return res.status(200).json({ userId: value.userId });
  } catch (error) {
    console.log('error', error)
  }
});

router.get("/approval", async (req, res, next) => {
  try {

    const schema = Joi.object({})

    const {value, error} = schema.validate(req.body);

    if (error) return res.status(400).json({'message': error})

    const resp = await getAllApproves()
    
    return res.status(200).json(resp);
  } catch (error) {
    console.log('error', error)
  }
});

router.put("/accepted", async (req, res, next) => {
  try {

    const schema = Joi.object({
      userApprovesId: Joi.string().required(),
      status: Joi.string().required(),
    })

    const {value, error} = schema.validate(req.body);

    if (error) return res.status(400).json({'message': error})

      const formatedData = {
        status: value.status
      }

    const resp = await updateApproves(formatedData, value.userApprovesId)
    
    return res.status(200).json({ message: 'Success'});
  } catch (error) {
    console.log('error', error)
  }
});

module.exports = router;