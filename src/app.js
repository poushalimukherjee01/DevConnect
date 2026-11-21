const express = require("express");
const app = express();

//Req handler --> miidleware....
app.get("/test", (req, res) => {
    res.send("Hello from my Express server!");
});
app.get("/", (req, res) => {
    res.send("Hey, What's up!");
});
//app.listen()--> starts the server....
app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000");
});
