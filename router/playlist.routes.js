const Router = require("express").Router;
const authMiddleware = require("../middlewares/auth-middleware");
const playlistController = require("../controllers/playlist-controller");

const router = new Router();

router.use(authMiddleware);

router.post("/playlists", playlistController.createPlaylist);
router.get("/playlists", playlistController.getUserPlaylists);
router.get("/playlists/:id", playlistController.getPlaylist);
router.post("/playlists/:id/tracks", playlistController.addTrackToPlaylist);
router.delete("/playlists/:id/tracks", playlistController.removeTrackFromPlaylist);
router.delete("/playlists/:id", playlistController.deletePlaylist);

module.exports = router;