import mongoose from "mongoose";
mongoose.set("strictQuery", false);

let env: any = process.env.DB_URL;

const connectDB = async () => {
  return mongoose.connect(env);
};

export default connectDB;
