const AppError = require("../utils/appError")

class UsersController {
 create(request, response) {
    const {name, email, password} = request.body;

    if ( !name ) {
      throw new AppError("nome é obrigatório!");
    }
  
    response.status(201).json({ name, email ,password })
  }
}

module.exports = UsersController;