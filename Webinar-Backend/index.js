require('dotenv').config()
const express = require("express")
var path = require('path');

const logger = require("./middleware/logger")
var cors = require('cors');
const getData = require('./scraper');

const app = express()
const PORT = 5000

app.use(express.json({ limit: '500mb', extended: true }))
app.use(express.urlencoded({ limit: '500mb', extended: false }))
var dir = path.join(__dirname, 'public');

app.use(express.static(dir));

app.use(cors())

// Logger Middleware
app.use(logger)

// Body Parser Middleware
app.use(express.json())

// Forms Middleware
app.use(express.urlencoded({ extended: false }))

// Webinar
app.use('/api/webinar', require("./routes/Webinar"))
// User
app.use('/api/user', require("./routes/User"))
// Lecturer
app.use('/api/lecturer', require("./routes/Lecturer"))
// Admin
app.use('/api/admin', require("./routes/Admin"))
// Upload
app.use('/api/upload', require("./routes/Upload"))
// Webinar Category
app.use('/api/webinarCategory', require("./routes/WebinarCategory"))

// set static folder
//app.use(express.static(path.join(__dirname, 'public')))

app.get("/webscrap", (req, res) => {
    try {
        for (var i = 1; i < 6; i++) {
            getData(i);
        }

        res.send("Data Is Scrapped")

    }
    catch (err) {
        console.log(err)
    }

})

app.get("/", (req, res) => {

    res.send("Welcome to Webinar Server")

})


app.listen(PORT, () => {
    console.log("Server started on port", PORT)
})