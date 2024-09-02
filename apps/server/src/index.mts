import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  res.send({ hello: "Hello, World!" });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
