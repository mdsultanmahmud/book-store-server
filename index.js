const express = require("express")
const app = express()
const dotenv = require('dotenv').config()
const cors = require("cors")
const { connectToServer, connectS } = require("./utils/dbConnect")
const port = 5000
const bookRoutes = require("./routes/v1/book.route")

// middleware 
app.use(cors())
app.use(express.json())

// database 
connectToServer()

//use routess 
app.use("/api/v1/book", bookRoutes)

app.get("/", (req, res) =>{
    res.send("server running successfully!!")
})

app.listen(port, () =>{
    console.log(`app is running from port: ${port}`)
})