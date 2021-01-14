const {Router} = require('express');
const { login } = require('../../contollers/users');
const router = Router();
router.get('/login', login);
module.exports = router;