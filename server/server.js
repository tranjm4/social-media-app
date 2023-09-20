const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/login", (req, res) => {
    res.send("Bruh");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})