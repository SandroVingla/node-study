const { Router } = require("express")
const UsersController = require("../controllhers/UsersController")
const usersRouters = Router()

const usersController = new UsersController();

usersRouters.post("/", usersController.create); 

module.exports = usersRouters;