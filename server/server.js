const express = require('express')
const app = express()

const PORT = 3000
const routes = require('./routes')


app.use('/services', routes)


// listening
app.listen(PORT, ()=> {
  console.log("Server is running on port", PORT)
})