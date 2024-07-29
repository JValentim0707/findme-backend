const UserValidateEmailModel = db.user_validates

const validationEmail = async (validationData) => {
  const validationRegister = UserValidateEmailModel.findOne(
    { 
      where: { user_id: validationData.userId, emai: validationData.email },
      order: [['created_at', 'DESC']],
    })
}