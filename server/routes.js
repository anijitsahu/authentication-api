// npm packages import
import express from "express"
import fs from "fs"
import path from "path"

// import local user list as using ES6 import so read the file using fs
const USERS = JSON.parse(fs.readFileSync('./userlist.json', 'utf-8', (err) => {
	if (err) throw err;
}))

const router = express.Router()

// use the middleware for body parsing
router.use(express.json())

console.log("USERS are", USERS, typeof USERS)

// creates a new user
router.post('/createUser', (req, res) => {
	console.log("body", req.body)
	let { email, name, password } = req.body

	// check an user is already exists or not. 
	// if not creates an user with the credentials provided
	if (USERS[email]) {
		res.status(404).json({ msg: "user exists" })
	} else {
		if (password && name) {
			USERS[email] = { name, password }
			fs.writeFile('./userlist.json', JSON.stringify(USERS), (err, data) => {
				if (err) throw err
				res.status(200).json({ msg: "user created successfully", userCreated: { email, name } })
			})
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

export default router;