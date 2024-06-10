const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const {adminRouter} = require('./routes/AdminRoute')

app.use(express.static('uploads'));
const {connectDb} = require('./db/dbConn')
app.use(cors({origin:'http://localhost:5173'}));
app.use(bodyParser.json());
app.use('/admin',adminRouter)


app.listen(3000 , ()=>{
    console.log('server started at port 3000');
    connectDb();

})