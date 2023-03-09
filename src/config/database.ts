import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const { DB_CONTACTS } = process.env;

export default async function connectDB() {
  try {
    DB_CONTACTS && (await mongoose.connect(DB_CONTACTS));

    console.log("Database connection successful");
  } catch (err) {
    console.error(err);

    process.exit(1);
  }
}
