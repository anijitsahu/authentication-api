# authentication-api
A Simple set of Authentication APIs using [Node JS](https://nodejs.org/docs/latest-v15.x/api/), [Express JS](https://expressjs.com/en/api.html)

ES6 `module` creation along with `import /export` is used. [Promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await) is used along with [async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await). To install all the dependecies `npm` is used.

Back end is implemented using [Node JS](https://nodejs.org/docs/latest-v15.x/api/), [Express JS](https://expressjs.com/en/api.html). To encypt the password [bcrypt](https://www.npmjs.com/package/bcrypt) is used. However all the users are stored in a JSON file. No database is used for *simplicity*.


## Features
<ul>
  <li> This is Simple set of Authentication APIs </li> 
  <li> All the common features like <strong>use creation, email validation, login, checking for authenticity of the user</strong> is implemented</li>
</ul>

- It is created using latest version of [Node JS 15](https://nodejs.org/docs/latest-v15.x/api/)

<ul>
 <li><b>Forget password</b> feature is implemented </li>
 <li><b>Reset password</b> as well as email id feature is added </li>
 <li>All the user details, email id, password is stored in a file <code>server/userlist.json</code>. <b>All the passwords are encrypted</b></li> 
</ul>

<ul>
  <li>Ready to use <i>REST APIs</i> </li>
  <li>Can be consumed any Frontend application framework that supports REST API</li>   
  <li>Can be used in conjunction with other popular JavaScript framework like <a href="https://reactjs.org/">ReactJS</a></li>  
</ul>  

  - *for simplicity no database is used*


## Installation

Clone and go inside the Repository:
```javascript
git clone https://github.com/anijitsahu/authentication-api.git
cd authentication-api
```
Install all the necessary dependencies:
```
npm install
``` 
Now run the server:
```
cd server
node server.js
```
Test it using username `anijit@gmail.com` and password `anijit123` with any REST client like [Postman](https://www.postman.com/)


**Test users**


Username | Password
---    | ---
` anijit@gmail.com ` | ` anijit123`


## API Listing

**POST** /services/createUser have the following input json
```json
{
  "name": "Anijit",
  "email": "anijit@gmail.com",
  "password": "anijit123"
}  
```

**POST** /services/login have the following input json
```json
{
  "email": "anijit@gmail.com",
  "password": "anijit123"
}  
```

**POST** /services/forget/anijit@gmail.com have no input json

**PUT** /services/resetCredentials have the following input json
```json
{
  "email": "anijit@gmail.com",
  "resetEmail": "anijit@gmail.com",  // this field is optional
  "resetPassword": "anijit123"
}  
```
