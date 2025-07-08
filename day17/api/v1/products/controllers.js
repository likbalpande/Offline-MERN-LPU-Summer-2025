const createProductController = async (req, res) => {
    try {
        const data = req.body;
        console.log("creating product...", data);

        let newProduct = await Product.create(data);
        res.status(201).json({
            isSuccess: true,
            message: `Product created`,
            data: {
                product: newProduct,
            },
        });
    } catch (err) {
        if (err.name === "ValidationError" || err.code == "11000") {
            res.status(400).json({ isSuccess: false, message: `Err: ${err.message}`, data: {} });
        }
        console.log("🔴 Error in createProductController");
        res.status(501).json({ isSuccess: false, message: "Internal Server Error", data: {} });
    }
};

module.exports = { createProductController };
