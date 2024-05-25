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

app.listen(process.env.PORT,()=>{
    console.log(`Listening ON port ${process.env.PORT}`);
})
// const temp = {
//   title: "Temp Task 1",
//   due: "03-Oct",
//   status: "progress",
//   id: 1526,
// };
// const temp2 = {
//   title: "Temp Task 2",
//   due: "04-Oct",
//   status: "completed",
//   id: 2025,
// };
// const temp3 = {
//   title: "Temp Task 4",
//   due: "06-Oct",
//   status: "pending",
//   id: 2025,
// };

// const todos = [temp, temp2, temp3];
// const to = todos.find((obj) => {
//     return obj.id == 2025;
//   })

//   to.title = "Sss"
// console.log(
//   todos
// );
