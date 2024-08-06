import { v4 as uuidv4 } from 'uuid';
import db from '../../models'

const UserApprovesModel = db.user_approves

const createApproves = async (approvesData) => {
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

const updateApproves = async (approvesData, userApprovesId) => {
  const userApproves = UserApprovesModel.update(approvesData, { where: { id: userApprovesId}})

  return userApproves
}

const getAllApproves = async () => {
  const res = await UserApprovesModel.findAll({ where: { status: 'pending'}, raw: true })

  return res
}

export {
  createApproves,
  updateApproves,
  getAllApproves
}