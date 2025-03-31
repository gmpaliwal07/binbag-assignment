const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware configurations
app.use(
  cors({
    origin: [
      'http://localhost:3000',   
      'http://localhost:5173',

    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// Security enhancements
const helmet = require("helmet");
app.use(helmet());



// Routes
const userRoute = require("./routes/user.routes.js");


// Route declarations
app.use("/api/v1/users", userRoute);


module.exports = app;
