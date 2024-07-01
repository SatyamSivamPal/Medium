import { Hono } from "hono";
import userRoutes from "./user";
import blogRoutes from "./blog";

const app = new Hono();

app.route("/user", userRoutes)
app.route("/blog", blogRoutes)

export default app;
