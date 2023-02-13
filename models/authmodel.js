const mongoose = require("mongoose")

const contracterScheema = new mongoose.Schema(
    {
        contractername: {
            type: String,
            required: true,
            trim: true,
            min: 3,
            max: 20,
        },
        uuid: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        contactNumber: { type: Number },
        pofilePicture: { type: String },
    },
    { timestamps: true }
);




module.exports = mongoose.model("contracter", contracterScheema);