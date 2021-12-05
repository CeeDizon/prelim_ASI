// Aquino, Bea Nichole T. - Dizon, Maycee G. - Quizon, Megan Rae L.
// CS - 401     6ASI    PRELIM Exam
// August 26, 2021


const express = require("express");
const bodyParse = require("body-parser");

// To set up the express app.
const app = express();


// To use body-parser middleware.
app.use(bodyParse.json());


// To initialize the routes.
app.use("/api", require("./routes/AquinoB_DizonM_Quizon_api"));

// To listen for requests.
app.listen(process.env.port || 4000, function() {
    console.log("[ Listening for Request ]");
});