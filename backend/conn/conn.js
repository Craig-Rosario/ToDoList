const mongoose = require('mongoose');
const conn = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://craigrosario04:cr042005@cluster0.t2j2h.mongodb.net/myDatabase?retryWrites=true&w=majority"
        );
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
conn();