// npm packages import
import express from "express"
import helmet from "helmet"

// local file modules import
import serviceRouter from "./routes.js"

// initialize express
const app = express()

// middleware to use the respective router
app.use('/services', serviceRouter)

// listening
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Server is running on port", PORT)
})