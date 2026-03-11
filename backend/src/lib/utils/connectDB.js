import mongoose, {mongo } from "mongoose"

const connectDB=async(req,res)=>{ 
    try {
        const connected=await mongoose.connect(process.env.MONGO_URI)
        if(connected){
            console.log("MONGODB Succesfully connected");
        }
    } catch (error) {
        console.log("ERROR connecting to the database", error)
        return res.json(500,{message:"Internal Server Error"})
    }
}

export default connectDB