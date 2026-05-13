const Router = require("express").Router;
const trendingController = require("../controllers/trending-controller");

const router = new Router();

router.get("/trending", trendingController.trending);
router.get("/trending/underground", trendingController.underground);
router.get("/trending/weekly", trendingController.weeklyTrending);
router.get("/trending/underground/weekly", trendingController.weeklyUnderground);
// router.get("/search", trendingController.search);

module.exports = router;