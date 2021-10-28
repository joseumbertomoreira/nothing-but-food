const express = require('express')
const app = express()
const router = express.Router()
const init = require("./src/init")
const path = require('path')

const public = path.resolve("./public")
app.use(express.static(public))

const PORT = 3000

app.set('view engine', 'ejs')
app.set("views", path.resolve("./src/views"))

app.use(router)

init(router)

app.listen(PORT, err => {
  
  if(err) console.log(`Cannot Listen on PORT ${PORT}`)

  console.log(`Server is Listening on PORT ${PORT}`)

})