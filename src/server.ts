import "dotenv/config";
import express from "express";
import cors from "cors";

// import AppRouter from "./routes";
import connectDB from "./config/database";

const app = express();
// const router = new AppRouter(app);

connectDB();

app.set("port", process.env.PORT || 3000);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router.init();

const port = app.get("port");
// eslint-disable-next-line no-console
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;
