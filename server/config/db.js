const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false)
        await mongoose.connect(
            process.env.MONGO_URI, 
            {
                bufferCommands: false, // Disable buffering
            }
        );

        console.log("Mongo connected")

    } catch(err) {
        console.log(process.env.MONGO_URI)
        console.log("Error connecting to Mongo : " + err);
        process.exit();
    }
}

module.exports = connectDB;