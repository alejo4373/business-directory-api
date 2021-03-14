const db = require('./index')

const getAll = async () => {
  try {
    let SQL = 'SELECT * from businesses'
    let businesses = db.any(SQL)
    return businesses
  } catch (err) {
    throw (err)
  }
}

const getById = async (id) => {
  try {
    let SQL = 'SELECT * from businesses WHERE id = $1'
    let business = db.one(SQL, [id])
    return business
  } catch (err) {
    throw (err)
  }
}

const add = async (newBusiness) => {
  try {
    let SQL = `
      INSERT INTO businesses (name, phone, address, description, picture_url, active, open_date, admin_user_id, avg_rating)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) 
      `
    let business = db.none(SQL, [
      newBusiness.name,
      newBusiness.phone,
      newBusiness.address,
      newBusiness.description,
      newBusiness.picture_url,
      newBusiness.active,
      newBusiness.open_date,
      newBusiness.admin_user_id,
      newBusiness.avg_rating,
    ])
    return business
  } catch (err) {
    throw (err)
  }
}

const update = async (id, updates) => {
  try {
    let SQL = `
      UPDATE businesses 
      SET name = $1, phone = $2, address = $3, description = $4,
        picture_url = $5, active = $6, open_date = $7, admin_user_id = $8, avg_rating = $9
      WHERE id = $10
      `
    let business = db.none(SQL, [
      updates.name,
      updates.phone,
      updates.address,
      updates.description,
      updates.picture_url,
      updates.active,
      updates.open_date,
      updates.admin_user_id,
      updates.avg_rating,
      id
    ])
    return business
  } catch (err) {
    throw (err)
  }
}

const remove = async (id) => {
  try {
    let SQL = 'DELETE FROM businesses WHERE id = $1'
    let business = db.none(SQL, [id])
    return business
  } catch (err) {
    throw (err)
  }
}

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove
}
