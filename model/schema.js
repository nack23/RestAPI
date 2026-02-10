let mongoose = require("mongoose");

let tablestructure = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    feature: {
        type: Boolean,
        default: true
    },
    rating: {
        type: Number,
        default: 4.8
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "mi"],
            message: "{VALUE} is not supported"
        }
    }
});

module.exports = mongoose.model("ProductAPI", tablestructure);
