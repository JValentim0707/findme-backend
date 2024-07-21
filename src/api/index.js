import app from './routes/index'

const port = 3000

app.get('/status', (req, res) => {
  res.send('Esta funcionando tudo normal')
})

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
})

module.exports = app