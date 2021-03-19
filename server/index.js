require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const app = express();

const authCtrl = require("./authController");
const fldrCtrl = require("./folderController");
const scndCtrl = require("./secondController");
const plntCtrl = require("./plantController");
const sndpCtrl = require("./secondPlantController");

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
  })
);

//authendpoints
app.post(`/api/auth/register`, authCtrl.register);
app.post(`/api/auth/login`, authCtrl.login);
app.get("/api/auth/logout", authCtrl.logout);
app.get("/api/auth/getUser", authCtrl.getUser);

//folder endpoints
app.get(`/api/folder`, fldrCtrl.getFolders);
app.post(`/api/folder/new`, fldrCtrl.newFolder);
app.delete("/api/folder/delete/:category_id", fldrCtrl.deleteFolder);
app.get(`/api/folder/get/:category_id`, fldrCtrl.getFirstFolder);

//second level folder endpoints
app.get(`/api/folder/second/:category_one_id`, scndCtrl.getFolders);
app.post(`/api/folder/second/new/:category_one_id`, scndCtrl.newFolder);
app.delete(`/api/folder/second/delete/:category_id`, scndCtrl.deleteFolder);

//plant endpoints
app.get(`/api/plants/:plant_category_id`, plntCtrl.getPlants);
app.post(`/api/plants/new/:plant_category_id`, plntCtrl.newPlant);
app.delete(`/api/plants/delete/:id`, plntCtrl.deletePlant);
app.get(`/api/plants/plant/:plant_id`, plntCtrl.getPlant);

//second level plants endpoints
app.get(`/api/plants/second/:plant_category_id`, sndpCtrl.getPlants);
app.post(`/api/plants/second/new/:plant_category_id`, sndpCtrl.newSecondPlant);
app.delete(`/api/plants/second/delete/:id`, sndpCtrl.deletePlant);
app.get(`/api/plants/second/plant/:plant_id`, sndpCtrl.getPlant);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((dbInstance) => {
  app.set("db", dbInstance);
  console.log("DB ready!");
  app.listen(SERVER_PORT, () =>
    console.log(`Server ready on port ${SERVER_PORT}`)
  );
});
