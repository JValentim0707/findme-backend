import { v4 as uuidv4 } from 'uuid';
import db from '../../models'

const UserApprovesModel = db.user_approves

const userApproveController = {}

userApproveController.create = async (approvesData) => {
  try {
    const fomatedData = {
      id: uuidv4(),
      ...approvesData,
      created_at: new Date(),
      updated_at: new Date(),
    }
    const resp = await UserApprovesModel.create(fomatedData)
    return resp

  } catch (error) {
    console.log(error)
  }
}

userApproveController.update = async (approvesData, userApprovesId) => {
  try {
    const userApproves = UserApprovesModel.update(approvesData, { where: { id: userApprovesId}})

    return userApproves
  } catch (error) {
    console.log(error)
    
  }

}

userApproveController.getAll = async () => {
  const res = await UserApprovesModel.findAll({ where: { status: 'pending'}, raw: true })

  return res
}

export default userApproveController