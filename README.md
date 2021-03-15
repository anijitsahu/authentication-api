# authentication-api
A Simple set of Authentication APIs using [Node JS](https://nodejs.org/docs/latest-v8.x/api/), [Express JS](https://expressjs.com/en/api.html)

ES6 `module` creation along with `import /export` is used. To install all the dependecies `npm` is used.

Back end is implemented using [Node JS](https://nodejs.org/docs/latest-v8.x/api/), [Express JS](https://expressjs.com/en/api.html). To encypt the password [bcrypt](https://npmjs.com/bcrypt). However all the users are stored in a JSON file. No database is used for *simplicity*.


## Features
<ul>
 <li> This is Simple set of Authentication APIs </li>
  <li> All the common features like <strong>use creation, email validation, login, checking for authenticity of the user</strong> is implemented</li>
</ul>
- Forget password feature is implemented
- Reset email id as password feature is added

- All the user details, email id, password is stored in a file `server/userlist.json`. **All the passwords are encrypted** 

<ul>
  <li>Ready to use <i>REST APIs</i> </li>
 <li>Can be consumed any Frontend application framework that supports REST API</li>
  <li>Can be used in conjunction with other popular JavaScript framework like React JS</li>
</ul>

  - *for simplicity no database is used*


## Installation

1. Clone the repository using ````git 
2. git clone https://github.com/anijitsahu/authentication-api.git
3. ` from `Git Bash / Command Prompt`
4. Navigate inside the directory by `authentication-api`
5. Install all the necessary dependecies by using `npm install` 
6. Navigate to the directory `cd server`
7. Run the server by `node server.js`
8. Open the `2` web browser and type`http://localhost:3000` in the address bar to load the application in each of them
9. In one browser login with username `anijit` and password `anijit123`


**Test users**


Username | Password
---    | ---
` anijit@gmail.com ` | ` anijit123`
