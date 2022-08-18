const mongoose = require("mongoose");

const SwimSchema = new mongoose.Schema({
    swimmer: {
        type: String,
        required: true,
    },
    swimEvent: { 
        type: String,
        required: true,
    },
    swimYears: {
        type: [Number],
        required: true,
    },
    swimTimes: {
        type: [String],
        required: true,
    },
});

const Swim = mongoose.model("Swim", SwimSchema);
module.exports = Swim;