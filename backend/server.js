const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const {adminRouter} = require('./routes/AdminRoute')
require('dotenv').config();
const port = process.env.PORT || 3001

app.use(express.static('uploads'));
const {connectDb} = require('./db/dbConn')


app.use(cors());
app.use(bodyParser.json());


//  calling admin route
app.use('/admin',adminRouter)




app.listen(port , ()=>{
    console.log(`server started at port ${port}`);
    connectDb();

})

