import express from "express";
import router from "./router.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.get("/", (req, res) => {
  res.send("Hello there !");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
