//
const mongoose = require ("mongoose"); 


const connectMongoDB = async() => {
    await mongoose.connect(process.env.MONGO_URI )
};

module.exports = connectMongoDB; 