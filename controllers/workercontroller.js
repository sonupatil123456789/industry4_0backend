
const Workermodel = require("../models/workerinfomodel");



// creating a worker in database 
exports.creatworker = async (req, res, next) => {

    try {
        const worker = await Workermodel.create(req.body);
        console.log(worker);
        res.status(200).json({
            success: true,
            worker,
            message: " creat a worker "
        })
    } catch (error) {
        res.status(402).json({
            success: false,
            message: `something goes wrong ----${error}----`
        })
    }
}

// get all products 
exports.getallworker = async (req, res) => {

    try {
        const worker = await Workermodel.find();
        const workercount = await Workermodel.find().count();
if (worker) {
    res.status(200).json({
        success: true,
        worker,
        workercount,
        message: " get all workers "
    })
} else {
    res.status(400).json({
        success: false,
        message: "Fail to load worker"
    })
}
    } catch (error) {
        res.status(402).json({
            success: false,
            message: `something goes wrong ----${error}----`
        })
    }
}



// update a worker details 
exports.updateworker = async (req, res) => {

    try {
        let worker = await Workermodel.findById(req.params.id);
        // console.log(req.param.id);
        if (!worker) {
            return next(new ErrorHander(" worker not found for updating", 500))
        }
        worker = await Workermodel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            useFindAndModify: true,
            runValidators: false
        });
        res.status(200).json({
            success: true,
            worker,
            message: " updated the  Worker "
        })
    } catch (error) {
        res.status(402).json({
            success: false,
            message: `something goes wrong ----${error}----`
        })
    }
}

// delet products 
exports.deletworker = async (req, res) => {

    try {
        const worker = await Workermodel.findById(req.params.id);
        // console.log(req.param.id);
        if (!worker) {
            return res.status(500).json({
                success: false,
                message: "worker not found",
            })
        }
        await worker.remove();
        res.status(200).json({
            success: true,
            worker,
            message: " worker deleted successfully"
        })
    } catch (error) {
        res.status(402).json({
            success: false,
            message: `something goes wrong ----${error}----`
        })
    }
}

// get a single  products 
exports.getsingleworker = async (req, res, next) => {

    try {
        const worker = await Workermodel.findById(req.params.id);
        if (!worker) {
            return next(new ErrorHander("single product not found", 500))

        }
        res.status(200).json({
            success: true,
            worker,
            message: " get a single worker"
        })
    } catch (error) {
        res.status(402).json({
            success: false,
            message: `something goes wrong ----${error}----`
        })
    }
}


// creating  worker in database 
exports.contracteraccountworkers = async (req, res, next) => {

    try {
        console.log(req.params.id)
        const worker = await Workermodel.find({
            companyid :req.params.id
        });

        console.log(worker);
        // console.log(worker);
        res.status(200).json({
            success: true,
            worker,
            message: " getting companyacount worker "
        })
    } catch (error) {
        res.status(402).json({
            success: false,
            message: `something goes wrong ----${error}----`
        })
    }
}