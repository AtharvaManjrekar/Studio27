const mongoose = require ("mongoose");
const connect_db = async()=>{
    try{
        await mongoose.connect(process.env.mongo_uri);
        console.log("Database Connected Successfully");
    } catch(err){
        console.log(err);
        process.exit(1);
    }
};

module.exports = connect_db;