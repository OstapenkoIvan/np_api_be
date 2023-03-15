import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URI } = process.env;

export default async function connectDB() {
  try {
    MONGO_URI && (await mongoose.connect(MONGO_URI));

    console.log("Database connection successful");
  } catch (err) {
    console.error(err);

    process.exit(1);
  }
}
