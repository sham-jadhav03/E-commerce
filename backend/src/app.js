import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import Cors from "cors";
import authRouter from "./routes/auth.routes.js";
import productRouter from "./routes/product.routes.js";
import cartRouter from "./routes/cart.routes.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  Cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter)

app.get("/", (req, res) => {
  res.send("hello from e-commerce");
});

export default app;
