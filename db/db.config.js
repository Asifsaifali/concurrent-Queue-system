import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MONGODB_URI is not defined in .env");
    }
    await mongoose.connect(uri, {
      maxPoolSize: 10,
    });

    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    process.exit(1); 
  }
};

export default connectDB;
