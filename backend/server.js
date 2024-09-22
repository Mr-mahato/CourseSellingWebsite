const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const { adminRouter } = require("./routes/AdminRoute");
const { userRouter } = require("./routes/UserRoute");
const { connectDb } = require("./db/dbConn");

require("dotenv").config();
const port = process.env.PORT || 3001;

app.use(express.static("uploads"));
app.use(cors());
app.use(express.json());


//  calling admin route
app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`server started at port ${port}`);
  connectDb();
});
