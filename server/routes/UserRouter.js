var router = require('express').Router()
const UserService = require('../services/UserService')
const passport = require("passport");
const UserServicieThienBD = require('../services/UserServicieThienBD');

// router.route("/login").get(UserService.loginGet).post(UserService.login)
router.route("/login").get(UserServicieThienBD.loginGet).post(UserServicieThienBD.login)


module.exports = router;