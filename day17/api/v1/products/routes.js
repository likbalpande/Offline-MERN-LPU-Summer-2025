const express = require("express");
const { createProductController } = require("./controllers.js");

const productRouter = express.Router();

productRouter.get("/", (req, res) => {
    res.json({
        isSuccess: true,
        message: "Products list fetched!",
        data: {},
    });
});

productRouter.post("/", createProductController);

module.exports = { productRouter };
