// const mongoose = require("mongoose");
// const DB_URI = 


// module.exports = () => {
//     return mongoose.connect(DB_URI).then(
//         res => console.log("💽 Database is Connected Successfully")
//     ).catch(err => console.log("Please Restart Server", err))
// }

const mongooose = require('mongoose')
mongooose.set('strictQuery', false)

const db = "mongodb+srv://durgeshchaudhary020401:Durgesh%402022@cluster0.vzdrcpb.mongodb.net/durgesh"

module.exports = () => {
    mongooose.connect(db, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => console.log("Database is Connected Successfully")).catch((err) => {
        console.log(err);
    })
}