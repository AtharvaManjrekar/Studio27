const mongoose = require("mongoose");

const uri = "mongodb+srv://atharvamanjrekar078_db_user:q00w4YF8vHQZubVs@cluster0.iqqjqux.mongodb.net/?appName=Cluster0";

mongoose.connect(uri)
.then(() => {
    console.log("MongoDB connected successfully");
    process.exit();
})
.catch((error) => {
    console.log("Connection failed:", error);
    process.exit(1);
});