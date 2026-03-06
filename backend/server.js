const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connect_db = require("./config/db");
const bookingRoutes  = require("./routes/bookingRoutes");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("SALON API RUNNING");
});

const port = 5000 || process.env.port;

app.listen(port, () => {
  console.log(`Server listening on ${port} port number.`);
});

app.use("/api", bookingRoutes);
app.use("/api", contactRoutes);

connect_db();
