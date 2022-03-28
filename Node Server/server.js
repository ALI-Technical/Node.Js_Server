const express = require("express");

const app = express();
const PORT = "5000"

app.get("/", (req, res) => {
    res.send(`<form method="POST" action="/userdata">
        <input placeholder="enter your name" name="username" />
        <button>LOGIN</button>
        </form>`)
});

app.get("/about", (req, res) => {
    res.send("ABOUT PAGE");
});

app.post("/formdata", (req, res) => {
    res.send("form data");
});

app.get("*", (req, res) => {
    res.send("404 page not found");
  });

app.listen(PORT, console.log(`server is running on localhost:${PORT}`));