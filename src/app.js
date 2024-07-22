import app from './routes/index'
import { generateHashedPassword, comparePassword } from './utils/auth'

const port = 3000

app.get('/', (req, res) => {
  res.send('Esta funcionando tudo normal')
})

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
})

module.exports = app
