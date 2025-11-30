import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

//app config
const app = express();
const port = 4000;

//middlewares
app.use(cors());
app.use(express.json());

//db connection
connectDB();

//api endpoints
app.get("/", (req, res) => res.send("api is running"));

//listen
app.listen(port, () =>
  console.log(`server is running on http://localhost:${port}`)
);

//mongodb+srv://amina_islam:<db_password>@cluster0.qk9yivb.mongodb.net/?
