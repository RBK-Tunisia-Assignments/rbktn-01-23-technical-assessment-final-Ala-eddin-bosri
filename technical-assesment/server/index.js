const express = require("express");
const app = express();
const cors = require("cors");

const recipesRoute = require("./routes/recipiesRoute");
app.use(express.json());
app.use(cors());
app.use('/',recipesRoute);
// TODO - add additional route handlers as necessary

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
