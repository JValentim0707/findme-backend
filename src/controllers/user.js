import db from '../../models'

const UserModel = db.users

const getUser = async (email) => {
  const data = await UserModel.findOne({ where: { email: email } })

  if (!data) return null

  return data.dataValues
}

export {
  getUser
}