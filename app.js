require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || '3000'
const usersRouter = require('./routes/users')
const businessesRouter = require('./routes/businesses')

app.use(express.json())

app.use('/users', usersRouter);
app.use('/businesses', businessesRouter);

app.get('/', (request, response, next) => {
  response.send('Hello World')
})


app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})
