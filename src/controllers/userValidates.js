import db from '../../models'
import { v4 as uuidv4 } from 'uuid';
import { generateHashedPassword } from "../utils/auth";

// Env Variables
require('dotenv').config()
const CLIENT = process.env["CLIENT"]

const UserValidateEmailModel = db.user_validates

const userValidateController = {}

userValidateController.create = async (userInfoData) => {
  let code
  if (CLIENT == 'DEV') code = 2222
  else code =  Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
  console.log('GENERATED CODE:', code)
  const hashedCode = await generateHashedPassword(String(code))

  const userInfoDataForm = {
    id: uuidv4(),
    email: userInfoData.email,
    user_id: userInfoData.userId,
    code: hashedCode,
    created_at: new Date(),
    updated_at: new Date()
  }

  const data = UserValidateEmailModel.create(userInfoDataForm)
}

export default userValidateController