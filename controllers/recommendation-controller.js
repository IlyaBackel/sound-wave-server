const recommendationService = require("../service/recommendation-service");

class RecommendationController {
  async recommendation(req, res, next) {
    try {
      const {
        timeRange = "week",
        limit = 9,
        genre = "",
        offset = 0,
      } = req.query;

      const tracks = await recommendationService.getRecommendationTracks({
        time: timeRange,
        limit,
        offset,
        genre,
      });

      return res.json(tracks);
    } catch (e) {
      next(e);
    }
  }

  async feelingLucky(req, res, next) {
    try {
      const { limit = 9 } = req.query;
      const tracks = await recommendationService.getFeelingLuckyTracks({
        limit,
      });

      return res.json(tracks);
    } catch (e) {
      next(e);
    }
  }

  async mostShared(req, res, next) {
    try {
      const { limit = 9 } = req.query;
      const tracks = await recommendationService.getMostSharedTracks({
        limit,
      });

      return res.json(tracks);
    } catch (e) {
      next(e);
    }
  }

  async trendingPlaylists(req, res, next) {
    try {
      const {
        timeRange = "week",
        limit = 9,
        type = "playlist",
        offset = 0,
      } = req.query;

      const playlists = await recommendationService.getTrendingPlaylists({
        time: timeRange,
        limit,
        offset,
        type,
      });

      return res.json(playlists);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new RecommendationController();
