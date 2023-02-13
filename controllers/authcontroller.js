const bcrypt = require("bcryptjs");
const Contracter = require("../models/authmodel");

exports.getallContracter = async (req, res, next) => {
  try {
    console.log(req.params.email);
    const contracter = await Contracter.findOne({
      email: req.params.email,
    });
    console.log(contracter);
    if (!contracter) {
      res.status(400).json({
        success: false,
        message: "Please enter valid email",
      });
    } else {
      res.status(200).json({
        success: true,
        contracter,
        message: " contracters details ",
      });
    }
  } catch (error) {
    res.status(402).json({
      success: false,
      message: `something goes wrong ----${error}----`,
    });
  }
};

exports.signup = async (req, res, next) => {
  try {
    const { contractername, email, contactNumber, password, pofilePicture } =
      req.body;
    if (!contractername) {
      return res.status(201).json({
        message: ` contractername field should not be empty  `,
      });
    }
    if (!email) {
      return res.status(201).json({
        message: `email field should not be empty `,
      });
    }
    if (!contactNumber) {
      return res.status(201).json({
        message: ` contactNumber field should not be empty`,
      });
    }
    if (!password) {
      return res.status(201).json({
        message: ` password field should not be empty `,
      });
    }

    let contracter = await Contracter.findOne({ email: email });
    if (contracter) {
      return res.status(201).json({
        success: false,
        message: ` user already existed with this emailid `,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, salt);
    contracterresponse = await new Contracter({
      contractername,
      contactNumber,
      email,
      pofilePicture,
      password: hash_password,
      uuid: Math.floor(1000 + Math.random() * 9000),
    });
    await contracterresponse.save();
    res.status(200).json({
      success: true,
      message: `user created successfully`,
      contracterresponse,
    });
  } catch (error) {
    console.log(error);
    res.status(402).json({
      success: false,
      message: `---------${error}---------`,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(201).json({
        message: `email field should not be empty = `,
      });
    }
    if (!password) {
      return res.status(201).json({
        message: ` password field should not be empty = `,
      });
    }
    let contracter = await Contracter.findOne({ email: email });
    console.log(contracter);

    if (!contracter) {
      return res.status(201).json({
        success: false,
        message: ` invalid crediantials `,
      });
    } else {
      let passwordmatch = await bcrypt.compare(password, contracter.password);
      if (!passwordmatch) {
        res.status(201).json({
          success: false,
          message: `invalid password crediantials`,
        });
      } else {
        res.status(200).json({
          success: true,
          message: `login successfully`,
          contracter,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(402).json({
      success: false,
      message: `---------${error}---------`,
    });
  }
};

exports.getlogin = async (req, res, next) => {
  try {
    const logininfo = await Contracter.findOne({ uuid: req.params.loginid });
    res.status(200).json({
      success: true,
      logininfo,
      message: "get login details ",
    });
  } catch (error) {
    res.status(402).json({
      success: false,
      message: `something goes wrong ----${error}----`,
    });
  }
};

exports.updatepassword = async (req, res, next) => {
  try {
    const companyuuid = req.params.uuid;
    const { password } = req.body;
    console.log(companyuuid);
    console.log(password);
    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, salt);
    console.log(hash_password);
    if (!password) {
      return res.status(201).json({
        message: ` password field should not be empty `,
      });
    }

    const logininfo = await Contracter.findOneAndUpdate(
      { uuid: companyuuid },
      { password: hash_password },
      {
        new: true,
        useFindAndModify: true,
        runValidators: false,
      }
    );
    res.status(200).json({
      success: true,
      logininfo,
      message: "Password updated successfully ",
    });
  } catch (error) {
    console.log(error);
    res.status(402).json({
      success: false,
      message: `---------${error}---------`,
    });
  }
};
