require('express-async-errors'); // catches any async error in the API, no need for any other ErrorHandling like try-catch // will work only after listening, middleware
const  express = require("express");
require('dotenv').config();
const app = express();

//initiating SERVERR
require('./startup/index.startup')(app); // strating server