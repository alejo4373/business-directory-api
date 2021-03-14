const express = require('express')
const businessesRouter = express.Router()
const Businesses = require('../db/Businesses')

businessesRouter.get('/', async (request, response, next) => {
  try {
    let businesses = await Businesses.getAll()
    response.status(200).json({
      data: businesses,
      err: false,
      msg: 'Successfully retrieved all businesses'
    })
  } catch (err) {
    response.status(500).json({
      err: true,
      msg: 'Failed to retrieve all businesses'
    })
  }
})

businessesRouter.get('/:id', async (request, response, next) => {
  try {
    let business = await Businesses.getById(request.params.id)
    response.status(200).json({
      data: business,
      err: false,
      msg: 'Successfully retrieved business by id'
    })
  } catch (err) {
    response.status(404).json({
      err: true,
      msg: 'Business not found'
    })
  }
})

businessesRouter.post('/', async (request, response, next) => {
  try {
    let newBusiness = request.body
    await Businesses.add(newBusiness)
    response.status(201).json({
      data: null,
      err: false,
      msg: 'Successfully added a business'
    })
  } catch (err) {
    console.log(err)
    response.status(500).json({
      err: true,
      msg: 'Failed adding a business'
    })
  }
})

businessesRouter.put('/:id', async (request, response, next) => {
  try {
    let businessId = request.params.id
    let updates = request.body
    await Businesses.update(businessId, updates)
    response.status(200).json({
      data: null,
      err: false,
      msg: 'Successfully updated business'
    })
  } catch (err) {
    console.log(err)
    response.status(500).json({
      err: true,
      msg: 'Failed updating business'
    })
  }
})

businessesRouter.delete('/:id', async (request, response, next) => {
  try {
    let businessId = request.params.id
    await Businesses.remove(businessId)
    response.status(200).json({
      data: null,
      err: false,
      msg: 'Successfully deleted a businesses'
    })
  } catch (err) {
    response.status(500).json({
      err: true,
      msg: 'Failed to delete business'
    })
  }
})

module.exports = businessesRouter;
