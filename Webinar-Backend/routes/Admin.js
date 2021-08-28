const express = require("express")
const router = express.Router()
const moment = require("moment")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require("../db/dbRoutes/AdminDb")


// Get all admins
router.get("/", async (req, res) => {
    try {
        let results = await db.getAllAdmins()
        res.json(results)
    }
    catch (e) {
        console.log(e)
        res.status(500)
    }
})

// Get a admin
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        let results = await db.getAdmin(id)
        if (results.length > 0) {
            res.json(results[0])
        }
        else {
            res.status(400).json({ msg: `No Admin with id ${id}` })
        }

    }
    catch (e) {
        console.log(e)
        res.status(500)
    }
})

// Add a Admin
router.post("/", async (req, res) => {

    try {
        const { name, email, phoneNumber, username, password } = req.body
        const saltRounds = parseInt(10, 10)
        const salt = await bcrypt.genSalt(saltRounds)
        const hash = await bcrypt.hash(password, salt)
        const newAdmin = {
            name,
            email,
            phoneNumber,
            username,
            password: hash,
            insertDate: moment().format()
        }

        if (!newAdmin.name) {
            return res.status(400).json({ msg: `No Admin name` })
        }

        let results = await db.postAdmin(newAdmin)
        res.json({ msg: "Admin Added" })
    }
    catch (e) {
        console.log(e)
        res.status(500)
    }

})

// Update Admin 
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params
        let results = await db.updateAdmin(id, req.body)
        console.log(results)
        if (results.affectedRows !== 0) {
            res.json({ msg: `Admin is updated`, user: results })
        }
        else {
            res.status(400).json({ msg: `No Admin with id ${id}` })
        }

    }
    catch (e) {
        console.log(e)
        res.status(500)
    }

})

// Delete a Admin
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        let results = await db.deleteAdmin(id)
        console.log(results)
        if (results.affectedRows !== 0) {
            //   res.json(results)
            res.json({ msg: `Admin is Deleted`, admin: results })
        }
        else {
            res.status(400).json({ msg: `No Admin with id ${id}` })
        }

    }
    catch (e) {
        console.log(e)
        res.status(500)
    }
})

// Login
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        let results = await db.getAdmin(id)
        if (results.length > 0) {
            res.json(results)
        }
        else {
            res.status(400).json({ msg: `No Admin with id ${id}` })
        }

    }
    catch (e) {
        console.log(e)
        res.status(500)
    }
})

// Add a Admin
router.post("/login", async (req, res) => {
    const { username, password } = req.body
    console.log(username, password)

    try {
        const result = await db.findAdmin(username)
        const admin = result[0]
        const isPasswordCorrect = await bcrypt.compare(password, admin.password)
        console.log(admin)
        console.log(isPasswordCorrect)
        if (isPasswordCorrect) {
            const token = jwt.sign({
                exp: Math.floor(Date.now() / 1000),
                adminId: admin.id,

            }, process.env.AUTH_SECRET)
            console.log(token)
            res.send({ token })
        }

    }
    catch (e) {
        console.log(e)
        res.status(500)
    }

})


module.exports = router