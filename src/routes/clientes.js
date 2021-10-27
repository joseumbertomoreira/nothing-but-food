const clientesController = require("../controller/clientes")


exports.ClienteRoute = router => {

  router.get("/cliente", clientesController.todosClientes)

  
}