const Otp = require("../models/otpscheema");

exports.getresetotp = async (req, res, next) => {
  try {
    const otp = await Otp.findOne({ userId: req.params.companyuuid });
    console.log(otp);
    if (otp) {
      otp.deleteOne();
    }
    var creatotp = await Otp.create(req.body);
    console.log(creatotp);
    if (!creatotp) {
      res.status(402).json({
        success: false,
        message: `something goes wrong ----${error}----`,
      });
    } else {
      res.status(200).json({
        creatotp,
        success: true,
        message: `otp created success`,
      });
    }
  } catch (error) {
    res.status(402).json({
      creatotp,
      success: false,
      message: `something goes wrong ----${error}----`,
    });
  }
};

exports.verifyotp = async (req, res, next) => {
  try {
    const otp = await Otp.findOne({ otp: req.params.otp });
    console.log(otp);
    if (!otp) {
      res.status(402).json({
        success: false,
        message: `please enter valid otp`,
      });
    } else {
      res.status(200).json({
        otp,
        success: true,
        message: `otp matched success`,
      });
    }
  } catch (error) {
    res.status(402).json({
      success: false,
      message: `something goes wrong ----${error}----`,
    });
  }
};
