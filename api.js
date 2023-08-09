const express = require("express");
const cors = require("cors");
const db = require('./db');

const api = express();

api.use(express.json());

api.use(cors());

api.get("/", (req, res) => res.send("The wrongs api: track injustice"));

api.get("/wrongs", async(req, res) => {
    const data = await db.query("SELECT * FROM wrong")
}) // returns all the data from wrong table, when in the url will get all data from wrong

api.get("/people/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const data = await db.query("SELECT * FROM person WHERE person_id = $1", [id]) //dollar sign is the placeholder for that id and the id is what goes there, will get the url from all people where person id is the number given there  
})
module.exports = api;
