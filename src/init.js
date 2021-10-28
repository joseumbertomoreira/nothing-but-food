const routesCliente = require("./routes/clientes")
const routesMenu = require("./routes/menu")

module.exports = router => {
  routesCliente.ClienteRoute(router)
  routesMenu.MenuRoute(router)
}