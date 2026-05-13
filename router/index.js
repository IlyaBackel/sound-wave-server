const Router = require("express").Router;
const { body } = require("express-validator");
const userController = require("../controllers/user-controller");
const trendingController = require("../controllers/trending-controller");
const recommendationController = require("../controllers/recommendation-controller");

const router = new Router();

router.post("/registration", 
    body("email").isEmail(),
    body("password").isLength({ min: 3, max: 32 }),
    userController.registration);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/trending", trendingController.trending);
router.get("/trending/underground", trendingController.underground);
router.get("/trending/weekly", trendingController.weeklyTrending);
router.get("/trending/underground/weekly", trendingController.weeklyUnderground);
router.get("/recommendation", recommendationController.recommendation);
router.get("/feeling-lucky", recommendationController.feelingLucky);
router.get("/most-shared", recommendationController.mostShared);
router.get("/trending-playlists", recommendationController.trendingPlaylists);
// router.get("/search", trendingController.search);

module.exports = router; 