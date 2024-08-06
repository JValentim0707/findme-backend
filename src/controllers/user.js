import db from '../../models'
import { v4 as uuidv4 } from 'uuid';
import { generateHashedPassword } from "../utils/auth";

const UserModel = db.users
const UserDetailsModel = db.user_details
const UserValidateEmailModel = db.user_validates

const getUser = async (email) => {
  const data = await UserModel.findOne({ where: { email: email } })

  if (!data) return null

  return data.dataValues
}

const createUser = async (userData) => {

  const hashedPassword = await generateHashedPassword(userData.password)

  const userFormData = {
    id: uuidv4(),
    first_name: userData.firstName,
    last_name: userData.lastName,
    email: userData.email,
    password: hashedPassword,
    born_date: userData.bornDate,
    role: userData.role,
    active: false,
    created_at: new Date(),
    updated_at: new Date()
  }

  const { dataValues } = await UserModel.create(userFormData)

  const userDetailsFormData = {
    id: uuidv4(),
    document: userData.document,
    user_id: dataValues.id,
    created_at: new Date(),
    updated_at: new Date()
  }

   const dataUserDetails = await UserDetailsModel.create(userDetailsFormData)

  return dataValues
}

const createUserValidationEmail = async (userInfoData) => {
  const code = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
  console.log('GENERATED CODE:', code)
  const hashedCode = await generateHashedPassword(String(code))

  console.log('hashedCode', userInfoData)
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

export {
  getUser,
  createUser,
  createUserValidationEmail
}