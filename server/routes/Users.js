const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const { sign } = require("jsonwebtoken")
const { validateToken } = require("../middleware/Auth")

const { Users } = require("../models")

router.post("/registration", async (req, res) => {})

router.post("/login", async (req, res) => {})

router.get("/registration", async (req, res) => {})

module.exports = router
