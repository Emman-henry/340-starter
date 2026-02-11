const express = require("express")
const expressLayouts = require("express-ejs-layouts")
require("dotenv").config()
const baseController = require("./controllers/baseController")

const app = express()
const static = require("./routes/static")
const inventoryRoute = require("./routes/inventoryRoute")


/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout") // not at views root

/* ***********************
 * Static Files
 *************************/
app.use(static)

/* ***********************
 * Home Route (REQUIRED for EJS)
 *************************/
app.get("/", baseController.buildHome)
// Inventory routes
app.use("/inv", inventoryRoute)


/* ***********************   
 * Local Server Information
 *************************/
const port = process.env.PORT
const host = process.env.HOST

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})
