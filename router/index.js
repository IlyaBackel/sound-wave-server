const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const { body } = require("express-validator");
const trackController = require("../controllers/track-controller");

const router = new Router();

router.post("/registration", 
    body("email").isEmail(),
    body("password").isLength({ min: 3, max: 32 }),
    userController.registration);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/trending", trackController.trending);
router.get("/trending/underground", trackController.underground);
router.get("/trending/weekly", trackController.weeklyTrending);
router.get("/trending/underground/weekly", trackController.weeklyUnderground);
router.get("/search", trackController.search);

module.exports = router; 