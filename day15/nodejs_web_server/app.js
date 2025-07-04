const http = require("http");

const app = http.createServer((req, res) => {
    console.log("----- req received -----", req.url);
    res.setHeader("Content-Type", "application/json");

    if (req.method === "GET") {
        switch (req.url) {
            case "/api/v1/students": {
                const obj = {
                    isSuccess: true,
                    message: "Students list fetched successfully",
                    data: { name: "Likhilesh", city: "Pune", score: 75 },
                };
                res.end(JSON.stringify(obj, null, 4));
                break;
            }
            case "/api/v1/products": {
                const obj = {
                    isSuccess: true,
                    message: "Product list fetched successfully",
                    data: { title: "Mixer Grinder", price: 2000, category: "Utensils / Electronics" },
                };
                res.end(JSON.stringify(obj, null, 4));
                break;
            }
            default: {
                res.end({
                    isSuccess: false,
                    message: "Invalid API endpoint",
                });
            }
        }
    } else {
        console.log(Object.keys(req));
        res.end("work in progress...");
    }
});

app.listen(2700, () => {
    console.log("------- Server is running --------");
});
