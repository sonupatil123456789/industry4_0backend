const express = require("express");
const { creatworker, getallworker,updateworker,deletworker,getsingleworker,contracteraccountworkers } = require("../controllers/workercontroller");
const {getallincident,creatnewincident,updateincident,deletincident,contracteraccountincident} = require("../controllers/incidentcontroller")
const {getallContracter,signup,login,getlogin,updatepassword} = require("../controllers/authcontroller")
const {getresetotp,verifyotp} = require("../controllers/otpcontroller")



// calling routes function
const router = express.Router();


// workerinformation routes 

router.route("/worker").get(getallworker) // not for every one 


router.route("/contracteraccountworkers/:id").get(contracteraccountworkers)
router.route("/worker/new").post(creatworker)
router.route("/worker/:id").put(updateworker)
router.route("/worker/:id").delete(deletworker)
router.route("/worker/:id").get(getsingleworker)


//incident routes

router.route("/incident").get(getallincident)
router.route("/incident/new").post(creatnewincident)
router.route("/incident/:id").put(updateincident)
router.route("/incident/:id").delete(deletincident)
router.route("/contracteraccountincident/:id").get(contracteraccountincident)

///auth routes 
router.route("/auth/signup").post(signup)
router.route("/auth/login").post(login)
router.route("/auth/login/:loginid").get(getlogin)
router.route("/auth/getallcontracters/:email").get(getallContracter)
router.route("/auth/updatepassword/:uuid").put(updatepassword)


// otpauth
router.route("/auth/sendotp/:companyuuid").post(getresetotp)
router.route("/auth/verifyotp/:otp").post(verifyotp)


module.exports = router

// {
//     "contractername": "omksrpatil",
//     "contracteremail": "omksrpatil@gmail.com ",
//     "contracternumber": 6666666666,
//     "noofpeopleenjured": 60,
//     "noofpeopledead": 6,
//     "totalfinancialloss": 60,
//     "pdffilelink": "https://firebasestorage.googleapis.com/v0/b/industry4mech.appspot.com/o/Images%2FWorkerimages%2F2022-09-15%2019%3A26%3A31.115901_image_picker7426387452685240493.jpg?alt=media&token=da39147b-251c-46fa-9efb-48aac2259c48",
//     "incidentlocation": {
//       "latitude": 27.984,
//       "longitude": 180.569,
//       "locationname": "veenanagar khopoli"
//     }
//   }