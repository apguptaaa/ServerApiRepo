const mongoose = require('mongoose')
const Local_url = "mongodb://127.0.0.1:27017/CurdOperationMERNstack" // Local MongoDB URL
const live_url = "mongodb+srv://guptaap783:NREk8dEWjhX8LLif@cluster0.or8tcgr.mongodb.net/CurdApi?retryWrites=true&w=majority&appName=Cluster0"// Replace with your live MongoDB URL
const dbconnect = async ()=>{
    try{
        await mongoose.connect(live_url)
        // await mongoose.connect(Local_url)
        console.log('mongodb connectd')
    }
    catch(error){
        console.log("error occured",error)
    }
}

module.exports = dbconnect