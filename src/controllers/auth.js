import db from '../../models'

// Functions

import { comparePassword } from "../utils/auth";

const UserValidateEmailModel = db.user_validates
const UserModel = db.users

const validationEmail = async (validationData) => {
  const { dataValues: validationRegister } = await UserValidateEmailModel.findOne(
    { 
      where: { user_id: validationData.userId, email: validationData.email },
      order: [['created_at', 'DESC']],
    })

  const compareToken = await comparePassword(validationData.code, validationRegister.code)

  if (!compareToken) return false

  const userUpdated = await UserModel.update({ active: true }, { where: { id: validationData.userId } })

  return true
}

export { 
  validationEmail
}