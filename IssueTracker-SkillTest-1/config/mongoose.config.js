import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/IssueTracker");
        console.log("MongoDB is Connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
export default connect;