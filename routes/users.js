const express = require('express')
const users = express.Router()

users.get('/', (request, response, next) => {
  response.json({ path: '/users' })
})

module.exports = users;
