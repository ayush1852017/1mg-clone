const connect = require("./config/db");
const app = require("./index");
const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`App listening on ${PORT}`);
  } catch (error) {
    console.error(error);
  }
});
