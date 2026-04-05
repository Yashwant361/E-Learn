import mongoose from "mongoose";

export const connectDb = async () => {
    try {

        await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log('DataBase Connected');

    } catch (error) {
        console.log("ERROR =>", error);

    }
}