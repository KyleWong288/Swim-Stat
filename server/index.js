const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const SwimModel = require("./models/swim-schema");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://Kylewong:Kylewong1@crud.imbs0ja.mongodb.net/swim?retryWrites=true&w=majority", 
    {
        useNewUrlParser: true,
    }
);

app.post("/insert", async (req, res) => {
    const swimmer = req.body.swimmer;
    const swimEvent = req.body.swimEvent;
    const swimYears = req.body.swimYears;
    const swimTimes = req.body.swimTimes;
    const swim = new SwimModel({ swimmer: swimmer, swimEvent: swimEvent, swimYears: swimYears, swimTimes: swimTimes });
    try {
        await swim.save();
        res.send("inserted data");
    } catch(err) {
        console.log(err);
    }
});

app.get("/read", async (req, res) => {
    SwimModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
});

app.listen(3001, () => {
    console.log('Server running on port 3001...');
});