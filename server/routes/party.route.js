const {Router} = require('express')
const {getLogin} = require('../controllers/party.controllers')

const router = Router()

router.get('/login', getLogin)

export default getLogin;