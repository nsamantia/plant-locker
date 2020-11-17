require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const app = express()

const authCtrl = require('./authController')
const fldrCtrl = require('./folderController')


const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env



app.use(express.json())
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
    }))


    //authendpoints
    app.post(`/api/auth/register`, authCtrl.register)
    app.post(`/api/auth/login`, authCtrl.login)
    app.get('/api/auth/logout', authCtrl.logout)
    app.get('/api/auth/getUser'), authCtrl.getUser

    //folder endpoints
    app.get(`/api/folder/:search`, fldrCtrl.getFolders)
    app.post(`/api/folder/new`, fldrCtrl.newFolder)

    //plant endpoints





massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false},
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DB ready!')
    app.listen(SERVER_PORT, () =>
    console.log(`Server ready on port ${SERVER_PORT}`))
})