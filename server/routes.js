// npm packages import
import express from "express";

const router = express.Router()

const USERS = {}
router.use(express.json())

// create user
router.post('/create', (req, res) => {
	console.log("body", req.body)
	let { email, name, password } = req.body
	if (USERS[email]) {
		res.status(404).json({ msg: "user exists" })
	} else {
		if (password && name) {
			USERS[email] = { name, password }
			res.json({ msg: "user created successfully" })

		} else {
			res.status(404).json({ msg: "Please enter username and password" })

		}
	}
})

// login 
router.post('/login', (req, res) => {
	let { email, password } = req.body
	console.log("USERS are", USERS)
	if (USERS[email] && (USERS[email]["password"] == password)) {

		res.status(200).json({ name: USERS[email]["name"] })
	} else {
		res.status(404).json({ msg: "wrong credentials" })
	}
})

// forget 
router.get('/forget/:email', (req, res) => {
	let { email } = req.params
	console.log("Email", email)

	if (USERS[email]) {
		res.status(200).json({ msg: "Enter new password" })
	} else {
		res.status(400).json({ msg: "User does not exists" })
	}
})

// reset
router.put('/reset', (req, res) => {
	let { email, password } = req.body
	if (USERS[email]) {
		USERS[email]["password"] = password
		res.status(200).json({ msg: "Password reset successfully" })
	} else {
		res.status(400).json({ msg: "User does not exists" })
	}
})

export default router