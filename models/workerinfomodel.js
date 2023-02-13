
const mongoose = require("mongoose");


const workerscheema = mongoose.Schema({
    companyid: {
        type: String,
    },
    workername: {
        type: String,
        required: true,
        trim: true,
    },
    workeremail: {
        type: String,
        required: true,
        default:"johndeo@gmail.com"
    },
    workernumber: {
        type: Number,
        required: true,
        maxLength: 10,
    },
    images: {
        type: String,
    },
    birthdate: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    medicalinformation: 
        {
            age: {
                type: Number,
                required: true,
            },
            gender: {
                type: String,
                required: true,
            },
            height: {
                type: Number,
                required: true,
            },
            weight: {
                type: Number,
                required: true,
            },
            bloodgroup: {
                type: String,
                required: true,
            },
        },
    adharnumber: {
        type: Number,
        ref: "User",
        maxLength: 10,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Workerinformation", workerscheema);








// {
//     "workername": "shreyas patil",
//     "workeremail": "shreyasind@gmail.com",
//     "workernumber": 9297429289,
//     "images": "shreyas patilxjnwxwxjwexwecxnjwejcww",
//     "birthdate": "29/03/2000",
//     "medicalinformation": {
//       "age": 40,
//       "gender": "male",
//       "weight": 70,
//       "height": 8,
//       "bloodgroup": "o+ve"
//     },
//     "adharnumber": 123456789012
//   }