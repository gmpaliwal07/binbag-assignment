const dotenv = require("dotenv");
const connectDB = require("./db/index");
const app = require("./app");
const path = require("path");
const fs = require("fs");
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.error("ERROR :", err);
      throw err;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MONGODB connection Failed :", err);
    throw err;
  });