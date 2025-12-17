import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/db.config.js"
import jobRoutes from "./route/jobs.route.js"


const app = express()
const PORT = process.env.PORT || 3000;

dotenv.config()
const Server = async()=>{
    try {
        await connectDB()
        app.use(express.json())
        app.use('/api', jobRoutes)
        app.listen(PORT, () => {
            console.log("Server is running on port 3000");
        })
    } catch (error) {
        console.error("Error starting server:", error);
    }
}

Server()