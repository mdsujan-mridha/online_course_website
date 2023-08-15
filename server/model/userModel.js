const mongoose = require('mongoose');


userSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,

    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 64,
    },
    picture: {
        type: String,
        default: true,
    },
    role: {
        type: [String],
        default: ["Subscriber"],
        enum: ["Subscriber", "Instructor", "Admin"]
    },
    stripe_account_id: "",
    striper_seller: {},
    stripeSession: {},

}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema);