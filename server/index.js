require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const app = express()

const authCtrl = require('./authController')
const fldrCtrl = require('./folderController')
const scndCtrl = require('./secondController')
const plntCtrl = require('./plantController')


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
    app.get('/api/auth/getUser', authCtrl.getUser)

    //folder endpoints
    app.get(`/api/folder`, fldrCtrl.getFolders)
    app.post(`/api/folder/new`, fldrCtrl.newFolder)
    app.delete('/api/folder/delete/:category_id', fldrCtrl.deleteFolder)

    //second level folder endpoints
    app.get(`/api/folder/second`, scndCtrl.getFolders)
    app.post(`/api/folder/second/new`, scndCtrl.newFolder)
    app.delete(`/api/folder/second/delete/:category_id`, scndCtrl.deleteFolder)

    //plant endpoints
    app.get('/api/plants', plntCtrl.getPlants)
    app.post(`/api/plants/new`, plntCtrl.newPlant)
    app.delete(`/api/plants/delete/:id`, plntCtrl.deletePlant)




massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false},
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DB ready!')
    app.listen(SERVER_PORT, () =>
    console.log(`Server ready on port ${SERVER_PORT}`))
})