const mongoose = require("mongoose");

const SwimSchema = new mongoose.Schema({
    swimmer: {
        type: String,
        required: true,
    },
    swimEvents: { 
        type: String,
        required: true,
    },
});

const Swim = mongoose.model("Swim", SwimSchema);
module.exports = Swim;