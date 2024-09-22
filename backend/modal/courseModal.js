const {Schema , model} = require('mongoose');

const courseSchema = new Schema({
    title:String,
    description:String,
    price:Number,
    tutor:String,
    image_link:String,
    category:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const courseModal = model('course',courseSchema);
module.exports = {
    courseModal
}