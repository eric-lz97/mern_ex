const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//this configures so we can have our environment variables
//in the dotend file 
require("dotenv").config();

//capture express to be abel to use the funtions
const app = express();
//creating the port 
const port = process.env.PORT || 3000;

//middleware where we can parse our json

app.use(cors());
app.use(express.json());


// capture the the uri environment var
// get link from mongodb atlas dashboard
const uri = process.env.ATLAS_URI;
//where the db is stored we use the uri from above and 
//connect to our database. 
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

// capture the mongoose connection
const connection = mongoose.connection;
// cal the function and check if its connected 
connection.once('open', () => {
    console.log("mongoDB DB connection established successfully");

});

// API end point where we call the api so
// we can use CRUD operations
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");
 
// starts using these files now when the url has /exercises it will
// rederict them to that page
app.use("/exercise", exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});