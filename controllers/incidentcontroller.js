const Incidentmodel = require("../models/incidentmodel");



// creating a incident in database 
exports.creatnewincident = async (req, res, next) => {

    try {
        const incident = await Incidentmodel.create(req.body);
        console.log(incident);
        res.status(200).json({
            success: true,
            incident,
            message: " creat a incident "
        })
    } catch (error) {
        res.status(402).json({
            success: false,
            message: `something goes wrong ----${error}----`
        })
    }
}

// get all incident
exports.getallincident = async (req, res) => {

    try {
        const incident = await Incidentmodel.find();
        const incidentcount = await Incidentmodel.find().count();
        res.status(200).json({
            success: true,
            incident,
            incidentcount,
            message: " get all incident "
        })
    } catch (error) {
        res.status(402).json({
            success: false,
            message: `something goes wrong ----${error}----`
        })
    }
}



// update a incident details 
exports.updateincident = async (req, res) => {

    try {
        let incident = await Incidentmodel.findById(req.params.id);
        console.log(req.param.id);
        if (!incident) {
            return next(new ErrorHander(" incident not found for updating", 500))
        }
        incident = await Incidentmodel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            useFindAndModify: true,
            runValidators: false
        });
        res.status(200).json({
            success: true,
            incident,
            message: " updated the  incident "
        })
    } catch (error) {
        res.status(402).json({
            success: false,
            message: `something goes wrong ----${error}----`
        })
    }
}

// delet incident 
exports.deletincident = async (req, res) => {

    try {
        const incident = await Incidentmodel.findById(req.params.id);
        console.log(req.param.id);
        if (!incident) {
            return res.status(500).json({
                success: false,
                message: "worker not found",
            })
        }
        await incident.remove();
        res.status(200).json({
            success: true,
            incident,
            message: " worker deleted successfully"
        })
    } catch (error) {
        res.status(402).json({
            success: false,
            message: `something goes wrong ----${error}----`
        })
    }
}


// creating  worker in database 
exports.contracteraccountincident = async (req, res, next) => {

    try {
        console.log(req.params.id)
        const incident = await Incidentmodel.find({
            companyid :req.params.id
        });

        console.log(incident);
        res.status(200).json({
            success: true,
            incident,
            message: " getting companyacount incident "
        })
    } catch (error) {
        res.status(402).json({
            success: false,
            message: `something goes wrong ----${error}----`
        })
    }
}