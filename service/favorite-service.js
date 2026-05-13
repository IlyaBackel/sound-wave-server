const User = require("../model/user-model");
const ApiError = require("../exception/api-error");

class FavoriteService {
  async addFavorite(userId, trackId) {
    if (!trackId) {
      throw ApiError.BadRequest("trackId обязателен");
    }
    const user = await User.findById(userId);
    if (!user.favorites.includes(trackId)) {
      user.favorites.push(trackId);
      await user.save();
    }
    return user.favorites;
  }

  async removeFavorite(userId, trackId) {
    const user = await User.findById(userId);
    user.favorites = user.favorites.filter(id => id !== trackId);
    await user.save();
    return user.favorites;
  }

  async getFavorites(userId) {
    const user = await User.findById(userId).select("favorites");
    return user.favorites;
  }
}

module.exports = new FavoriteService();