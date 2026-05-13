const Router = require("express").Router;
const authMiddleware = require("../middlewares/auth-middleware");
const favoriteController = require("../controllers/favorite-controller");

const router = new Router();

router.use(authMiddleware);

router.post("/favorites", favoriteController.addFavorite);
router.delete("/favorites", favoriteController.removeFavorite);
router.get("/favorites", favoriteController.getFavorites);

module.exports = router;