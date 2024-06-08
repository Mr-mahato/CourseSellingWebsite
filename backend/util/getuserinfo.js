

const getUserInfo = (req,res)=>{
    console.log(req.user);
    res.status(200).json(req.user);
}

module.exports = {  
getUserInfo
}