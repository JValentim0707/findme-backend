import db from '../../models'

const UserDetailsModel = db.user_details

const userDetailsController = {}

userDetailsController.update = async (userId, userDetailsData) => {
  try {
    const data = await UserDetailsModel.update(userDetailsData, { where: { user_id: userId}})
  
    return data
  } catch (error) {
    throw new Error('error:', error)
  }
}

export default userDetailsController