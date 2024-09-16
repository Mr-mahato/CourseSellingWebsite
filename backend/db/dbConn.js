const mongoose = require('mongoose');
require('dotenv').config();
const connectDb = async()=>{
    try {
        const databse = mongoose.connect(process.env.MongoDb_URL , {dbName:"CourseSelling"})
        console.log('Database connected');        
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    connectDb
}
connectDb();