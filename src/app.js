import app from './routes/index'

const port = 3030

app.get('/', (req, res) => {
  res.send('Esta funcionando tudo normal')
})

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
})

module.exports = app
