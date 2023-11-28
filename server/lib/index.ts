import mongoose from "mongoose";

const MONGODB_URI = 'mongodb+srv://test:Test123@cluster0.zjitums.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI);

export default mongoose.connection;
