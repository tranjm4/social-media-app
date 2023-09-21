const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/login", (req, res) => {
    res.json({ username: "Bruh", password: "Pluh" });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})