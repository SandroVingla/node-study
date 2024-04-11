require("express-async-errors")
const database = require("./database/sqlite")

const AppError = require("./utils/appError")

const express = require("express")
const routes = require("./routes")

const app = express();
app.use(express.json())

app.use(routes)
database();

app.use((request, error, response, next) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error.status);

  return response.status(500).json({
    status: "error",
    message: "Internal server error!!"
  })
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is runing on PORT ${PORT}`))

