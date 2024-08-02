import express from 'express'
import { EXPRESS_PORT } from './config/config.js'
import serverless from 'serverless-http'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello, Express!')
})

app.get('/hello/:message', (req, res) => {
  const message = req.params.message
  res.send(`<h1>Hola Agosto ${message}!</h1>`)
})

if (process.argv[2] === 'localServer') {
  app.listen(EXPRESS_PORT, () => {
    console.log('Server is running on http://localhost:' + EXPRESS_PORT)
  })
} else {
  console.log('AWS Lambda Handler')
  module.exports.handler = serverless(app)
}
