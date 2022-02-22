const express = require('express')
const Mongoose = require('Mongoose')
const cors = require('cors')

const app = express()
const port = 8000

app.use(express.Router())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());

Mongoose.connect("mongodb://localhost:27017/dbtaskexam",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log("Database Connected Successfully!");
})

const UserRouter = require("./Router/UserRouter")
app.use("/user",UserRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))