const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const {adminRouter} = require('./routes/AdminRoute')
const {userRouter} = require('./routes/UserRoute')
const {connectDb} = require('./db/dbConn')



app.get('/demo',(req,res)=>{
    console.log(req.session.user);
    res.json({data:req.session.user});
})

require('dotenv').config();
const port = process.env.PORT || 3002

app.use(express.static('uploads'));
app.use(cors());
app.use(express.json());

app.use(session({
    secret:"super30",
    resave:false,
    saveUninitialized:true,
    // set true if using https
    cookie:{secure:false}
}))




//  calling admin route
app.use('/admin',adminRouter)
app.use('/user',userRouter)


app.listen(port , ()=>{
    console.log(`server started at port ${port}`);
    connectDb();

})

