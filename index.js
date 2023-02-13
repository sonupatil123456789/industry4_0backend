const express = require("express")
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
app.use(express.json());
const cors = require('cors')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Handling Uncaught Exception - un caught error
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});

// configs path of env
dotenv.config({ path: "./config.env" })

// connecting to the database 
mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
})


// //routes imports
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
const Worker = require("./routes/workerroutes");
app.use("/api/v1", Worker)


const server = app.listen(process.env.PORT, () => {
    console.log(`your server is working on port ${process.env.PORT}`)
})


// Unhandled Promise Rejection for mongo db
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
    server.close(() => {
        process.exit(1);
    });
});