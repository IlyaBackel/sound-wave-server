const Router = require("express").Router;

const userRoutes = require("./user.routes");
const trendingRoutes = require("./trending.routes");
const recommendationRoutes = require("./recommendation.routes");
const playlistRoutes = require("./playlist.routes");
const favoriteRoutes = require("./favorite.routes");

const router = new Router();


router.use(userRoutes);               
router.use(trendingRoutes);           
router.use(recommendationRoutes);     
router.use(playlistRoutes);           
router.use(favoriteRoutes);           

module.exports = router;