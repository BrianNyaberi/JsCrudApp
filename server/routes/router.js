const express = require('express');
const route = express.Router();

const services = require('../services/render')

/**
 * @description Root route
 * @method GET /
 */
route.get('/', services.homeRoutes)

/**
 * @description add_user route
 * @method GET /add_user
 */
route.get('/add-user',services.add_user)

/**
 * @description update_user route
 * @method GET /update_user
 */
route.get('/update-user',services.update_user)

module.exports = route