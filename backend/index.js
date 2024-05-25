require("dotenv").config();
const cors = require("cors")
const express = require("express");

const app = express();
// Applying Cors
app.use(cors());

// JSON formatting
app.use(express.json()); // PARSER JSON

// DataBase Connectivity

//  Importing Created Router
const router = require("./routers/router")

app.use("/",router);

app.listen(3000,()=>{
    console.log(`Listening ON port ${3000}`);
})
