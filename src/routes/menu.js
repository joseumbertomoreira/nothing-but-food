const menuController = require("../controller/menu")

exports.MenuRoute = router => {

  router.get("/", menuController.index)

}