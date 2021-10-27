const express = require('express')
const app = express()

const path = require('path')

const PORT = 3000

const router = express.Router()

app.use(router)

router.get("/", (req, res, next) => { 
  res.send("Hello World!")
})

app.listen(PORT, err => {
  
  if(err) console.log(`Cannot Listen on PORT ${PORT}`)

  console.log(`Server is Listening on PORT ${PORT}`)

})