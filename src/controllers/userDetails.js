import db from '../../models'

const UserDetailsModel = db.user_details

const updateUserDetails = async (userId, userDetailsData) => {

  const userUpdated = UserDetailsModel.update(userDetailsData, { where: { user_id: userId}})

  return userUpdated

}

export { 
  updateUserDetails
}