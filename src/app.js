import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Express test");
});

export default app;