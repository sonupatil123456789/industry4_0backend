
const mongoose = require("mongoose");


const incidentscheema = mongoose.Schema({
    companyid: {
        type: String,
    },
    contractername: {
        type: String,
        required: true,
        trim: true,
    },
    contracteremail: {
        type: String,
        required: true,
        default:"johndeo@gmail.com"
    },
    contracternumber: {
        type:Number,
        required: true,
        maxLength: 10,
    },
    incidenttype: {
        type: String,
        // required: true,
        default:""
    },
    noofpeopleenjured: {
        type: Number,
        required: true,
        maxLength: 10,
        default:0
    },
    noofpeopledead: {
        type: Number,
        required: true,
        maxLength: 10,
        default:0
    },
    totalfinancialloss: {
        type: Number,
        required: true,
        maxLength: 15,
        default:0
    },
    totalinvestment: {
        type: Number,
        required: true,
        maxLength: 15,
        default:0
    },
    pdffilelink: {
        type: String,
        required: true,
    },
    incidentlocation: {
            latitude: {
                type: Number,
                required: true,
            },
            longitude: {
                type: Number,
                required: true,
            },
            altitude: {
                type: Number,
                required: true,
            }, 
    },
    createdAt: {
        type: Date,
        default: Date.now("<YYYY-mm-dd>"),
    },
});

module.exports = mongoose.model("incidentmodal", incidentscheema);