const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://likhilesh-2:abcd1234@cluster0.qyacrci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {
            dbName: "day16",
        }
    )
    .then(() => {
        console.log("------- ✅ DB connected -------");
    })
    .catch((err) => {
        console.log("----- ❌ DB connection error ------");
        console.log(err.message);
    });
