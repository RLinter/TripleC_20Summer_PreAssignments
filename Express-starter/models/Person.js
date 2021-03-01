const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false,
        default: -1
    },
    gender: {
        type: String,
        required: false,
        default: "unknown"
    },
    weight: {
        type: Number,
        required: false,
        default: -1
    },
    height: {
        type: Number,
        required: false,
        default: -1
    },
    isMarried: {
        type: Boolean,
        required: false,
        default: false
    }

})

module.exports = User = mongoose.model("Person", personSchema, "Person")
