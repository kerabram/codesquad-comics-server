require("dotenv").config();//summon the dotenv library
require("./config/connection")//use the connection to the database
require("./config/authStrategy")//use the authentication strategies from different applications for single sign on (SSO)


//--- NEW: DATABASE CONNECTION CODE MUST BE ABOVE THIS LINE ---
const express = require("express");
const morgan = require("morgan");
const path = require("node:path");
const helmet = require("helmet"); //make sure you have helmet from this classwork on
const cors = require("cors");
//---PER 3 DATA STORAGE---
//Summon mongoose after you installed it
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(helmet()); //make sure you have helmet from this classwork on
app.use(morgan("dev"));
app.use(cors({credentials: true, origin: true})); //NEW: allow cors' credentials and origin to be defined as true within an object as the parameter
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 



//Define the routing variable for authRoutes
const booksRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRouter');

app.use("/", booksRoutes);
app.use("/auth", authRoutes);


const siteData = require('./data/siteData');


//--- NEW: ERR HANDLING CODE MUST BE BELOW THIS LINE ---
//NEW: error handling middle ware --> "Catch-all"
app.use((error, request, response, next) => {
    //Our condition should be if MongoDB detects the error code 11000, we need to flag the user as a duplicate
    let condition = error.code === 11000

    //console.log the condition
    console.log(condition)

    //stage an if-else statement
    if (condition) {
        //return the status as the error's status or default to a 400. 
      return response.status(error.status || 400).json({
        error: {message: "Error detected!!!"},
        statusCode: error.status || 400,
        //log the error message
        })
        
        //confirm status codes
    } else {
        //console.log that account check passed
        console.log("We passed the error handling middleware, you're good to go")
    }

    //Any other errors are caught
    //Return the status as the error's status or default to a 500 to reflect on the server side. 
    response.status(error.status || 500).json({
      error: {message: error.message || "Internal server error, oh no!"},
      statusCode: error.status || 500,
    })
    //log the error message

    //confirm status codes
})
//----------
app.listen(PORT, () => {
  console.log(
    `Server is listening on port ${PORT}. Use http://localhost:${PORT}/`
  );
});