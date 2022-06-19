const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://ayush:ayush@cluster0.1rqfr.mongodb.net/onemg?retryWrites=true&w=majority"
  );
};
module.exports = connect;
