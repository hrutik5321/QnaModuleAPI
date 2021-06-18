const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
dotenv.config();

//IMPORTING ROUTES
const authRoutes = require("./routes/auth");
const queryRoutes = require("./routes/query");
const responseRoutes = require("./routes/response");

//CONNECTING TO BACKEND
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

//ROUTES
app.use("/api", authRoutes);
app.use("/api/query", queryRoutes);
app.use("/api/response", responseRoutes);

//CONNECTING SERVER
const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Server Running At Port ${port}`);
});
