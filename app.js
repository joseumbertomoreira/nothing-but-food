const express = require('express')
const app = express()
const router = express.Router()
const init = require("./src/init")
const path = require('path')

const PORT = 3000

app.use(router)


init(router)


router.get("/", (req, res, next) => { 
  res.send("Hello World!")
})

app.listen(PORT, err => {
  
  if(err) console.log(`Cannot Listen on PORT ${PORT}`)

  console.log(`Server is Listening on PORT ${PORT}`)

})