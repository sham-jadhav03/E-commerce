import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req, res) =>{
    res.send("hello from e-commerce");
})

export default app;
