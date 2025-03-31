const mongoose = require("mongoose");
const DB_NAME = require('../constants').DB_NAME;

const connectDB = async () => {
    try {
      // Remove the extra slash when concatenating
      const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}${DB_NAME}`);
      console.log(`\n MongoDB Connected ~~ DB HOST: ${connectionInstance.connection.host} \n`);
    } catch (error) {
      console.error("MONGO DB CONNECTION ERROR:", error);
      process.exit(1);
    }
  }


module.exports = connectDB;