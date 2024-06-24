import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})