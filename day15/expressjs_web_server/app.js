const express = require("express");
const { getAllDataFromArrayFromFile, saveObjectToArrayInFile } = require("./file-helper");

const filePath = "./local_db.json";

const app = express();

app.use(express.json()); // it tells the express server to read the incoming request body in json format

app.get("/api/v1/students", async (req, res) => {
    const studentArr = await getAllDataFromArrayFromFile(filePath);

    res.json({
        isSuccess: true,
        message: "List of students",
        data: studentArr,
    });
});

app.post("/api/v1/students", async (req, res) => {
    try {
        const data = req.body;
        const newObj = await saveObjectToArrayInFile(data, filePath);

        res.status(201);

        res.json({
            isSuccess: true,
            message: "Student added successfully",
            data: newObj,
        });
    } catch (err) {
        res.status(500);

        res.json({
            isSuccess: false,
            message: "Internal Server Error",
            data: {},
        });
    }
});

app.patch("/api/v1/students/:studentId", async (req, res) => {
    try {
        const { studentId } = req.params;
        console.log(studentId);
    } catch (err) {
        res.status(500);

        res.json({
            isSuccess: false,
            message: "Internal Server Error",
            data: {},
        });
    }
});

//app.put
//app.patch
//app.delete

app.get("/api/v1/products", (req, res) => {
    res.json({
        isSuccess: true,
        message: "List of students",
        data: [
            {
                title: "Mixer Grinder",
                price: 2000,
                category: "Utensils / Electronics",
            },
        ],
    });
});

app.listen(2700, () => {
    console.log("----------- Server is running ----------- ");
});
