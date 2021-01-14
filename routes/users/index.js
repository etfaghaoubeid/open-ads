const {Router} = require('express');
const { login ,getAllusers} = require('../../contollers/users');
const router = Router();
router.get('/login', login);
router.get('/all-users',getAllusers)
module.exports = router;