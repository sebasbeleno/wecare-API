const { Router } = require('express');
const router = Router();

const { createUser } = require('../controllers/user.controllers')

router.post('/createUser', createUser)

module.exports = router