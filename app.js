import express from "express";

const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

export default app;