const mongoose = require("mongoose");
const connection = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://127.0.0.1:27017/sajilo-bazardb"
    );
    if (conn) {
      console.log("connected to mongodb");
    } else {
      console.log("db connection to mongodb");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = connection;
