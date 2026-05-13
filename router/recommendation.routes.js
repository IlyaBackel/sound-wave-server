const Router = require("express").Router;
const recommendationController = require("../controllers/recommendation-controller");

const router = new Router();

router.get("/recommendation", recommendationController.recommendation);
router.get("/feeling-lucky", recommendationController.feelingLucky);
router.get("/most-shared", recommendationController.mostShared);
router.get("/trending-playlists", recommendationController.trendingPlaylists);

module.exports = router;