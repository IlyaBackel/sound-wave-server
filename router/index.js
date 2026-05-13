const Router = require("express").Router;
const { body } = require("express-validator");
const userController = require("../controllers/user-controller");
const trendingController = require("../controllers/trending-controller");
const recommendationController = require("../controllers/recommendation-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const playlistController = require("../controllers/playlist-controller");
const favoriteController = require("../controllers/favorite-controller");

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
router.post("/playlists", authMiddleware, playlistController.createPlaylist);
router.get("/playlists", authMiddleware, playlistController.getUserPlaylists);
router.get("/playlists/:id", authMiddleware, playlistController.getPlaylist);
router.post("/playlists/:id/tracks", authMiddleware, playlistController.addTrackToPlaylist);
router.delete("/playlists/:id/tracks", authMiddleware, playlistController.removeTrackFromPlaylist);
router.delete("/playlists/:id", authMiddleware, playlistController.deletePlaylist);

router.post("/favorites", authMiddleware, favoriteController.addFavorite);
router.delete("/favorites", authMiddleware, favoriteController.removeFavorite);
router.get("/favorites", authMiddleware, favoriteController.getFavorites);

module.exports = router; 