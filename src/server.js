const express = require("express")

const app = express();

app.get("/message/:id/:user", (request, response) => {
  const {id, user} = request.params;

  response.send(`Id da mensagen ${id} para o usuário ${user}`)
})

app.get("/users", (request,response) => {
  const {page, limit} = request.query; 

  response.send(`Pagina ${page}. Mostrar: ${limit}`)
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is runing on PORT ${PORT}`))

