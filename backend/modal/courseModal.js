const {Schema , model} = require('mongoose');

const courseSchema = new Schema({
    Title:String,
    Description:String,
    Price:Number,
    Published:Boolean,
    Tutor:String,
    File:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const courseModal = model('course',courseSchema);
module.exports = {
    courseModal
}