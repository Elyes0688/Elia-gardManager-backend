const express = require("express");
const cors = require("cors");
const port = 8000;
const login = require("./routes/login");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/login", login); // Les routes définies dans login.js seront accessibles via /login (exemple : GET /users/login)

// Démarrer le serveur Express
app.listen(port, () => {
  console.log(`Serveur en ligne sur le port ${port}`);
});

/*ADMIN
app.post("/gard-manager/user", (req, res) => {});
app.post("/gard-manager/schedule", (req, res) => {});

*/
/*
USER
app.post("/gard-manager/switch_offer", (req, res) => {});
app.post("/gard-manager/switch_request", (req, res) => {});
app.post("/gard-manager/switch_requests/state", (req, res) => {});

*/
/*
GLOBAL
app.get("/gard-manager/login", (req, res) => {});
app.get("/gard-manager/schedule", (req, res) => {});
app.get("/gard-manager/switch_offer", (req, res) => {});
app.get("/gard-manager/switch_requests/sickness", (req, res) => {});
app.get("/gard-manager/switch_requests/holydays", (req, res) => {});
app.get("/gard-manager/switch_requests/classics", (req, res) => {});
app.get("/gard-manager/switch_requests/states", (req, res) => {});
 */
