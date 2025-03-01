const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const Routes = require("./routes/routes");

app.use(cors());
app.use(express.json());

const PORT = process.env.DEV_PORT || 3000;

app.use("/", Routes);


app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
});