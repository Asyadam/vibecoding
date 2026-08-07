import { Elysia } from "elysia";
import { db } from "./db";

const app = new Elysia()
  .get("/", () => ({ message: "Hello Elysia!" }))
  .get("/health", () => ({ status: "ok", database: "connected" }))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
