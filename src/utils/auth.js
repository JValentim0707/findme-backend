import bcrypt from 'bcrypt'


const generateHashedPassword = async (password) => {
  try {
    const saltRounds = 10
    return bcrypt.hash(password, saltRounds)
  } catch (error) {
    console.log('error: ', error)
  }

}

const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword)
}

export {
  generateHashedPassword,
  comparePassword
}