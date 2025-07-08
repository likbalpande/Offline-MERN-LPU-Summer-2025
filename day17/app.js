const dotEnv = require("dotenv");
dotEnv.config();

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        isSuccess: true,
        message: "Server is running",
        data: {},
    });
});

app.listen(2900, () => {
    console.log("------ Server ir running --------");
});
