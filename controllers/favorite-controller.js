const favoriteService = require("../service/favorite-service");

class FavoriteController {
  async addFavorite(req, res, next) {
    try {
      const userId = req.user.id;
      const { trackId } = req.body;
      const favorites = await favoriteService.addFavorite(userId, trackId);
      return res.json({ favorites });
    } catch (e) {
      next(e);
    }
  }

  async removeFavorite(req, res, next) {
    try {
      const userId = req.user.id;
      const { trackId } = req.body;
      const favorites = await favoriteService.removeFavorite(userId, trackId);
      return res.json({ favorites });
    } catch (e) {
      next(e);
    }
  }

  async getFavorites(req, res, next) {
    try {
      const userId = req.user.id;
      const favorites = await favoriteService.getFavorites(userId);
      return res.json({ favorites });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new FavoriteController();