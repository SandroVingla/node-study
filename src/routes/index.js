const { Router } = require("express")

const usersRouter = require("./usr.routes")

const routes = Router();
routes.use("/users", usersRouter)

module.exports = routes;