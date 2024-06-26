require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/app', (req, res) => {
  res.send('<h1>App Running</h1>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})