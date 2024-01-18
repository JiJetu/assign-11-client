const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

//middlewarec




//mongo connection end///



app.get('/', (req, res) => {
  res.send('running')
})

app.listen(port, () => {
  console.log(`running port : ${port}`);
})
