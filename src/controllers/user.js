import db from '../../models'

const UserModel = db.users

const getUser = async (email) => {
  const data = await UserModel.findOne({ where: { email: email } })

  if (!data) return null

  return data.dataValues
}

const createUser = async (userData) => {

  const data = await UserModel.create({
    first_name: userData.firstName,
    last_name: userData.lastName,
    document: userData.document,
    email: userData.email,
    password: userData.password,
    phone: userData.phone,
    bornDate: userData.bornDate,
    role: userData.role,
  }, {fields: ['id', 'email']})

  return data
}

export {
  getUser,
  createUser
}