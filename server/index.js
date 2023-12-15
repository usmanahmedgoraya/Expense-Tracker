// import the useful things
require("dotenv").config();
const bodyParser = require('body-parser');
const express = require('express')
const connectToDB = require('./conectToDB')
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin:"http://localhost:5173"
}))

// Declare the port
const port = 3000

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// Test API Endpoint
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Using API Endpoint using Routing
app.use("/api",require('./Routes/Expense'))


// Listening the app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})