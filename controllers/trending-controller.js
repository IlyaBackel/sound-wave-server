const trendingService = require("../service/trending-service");

class TrendingTrackController {
  async trending(req, res, next) {
    try {
      const {
        timeRange = "week",
        limit = 9,
        genre = "",
        offset = 0,
      } = req.query;

      const tracks = await trendingService.getTrendingTracks({
        time: timeRange,
        limit: limit,
        offset: offset,
        genre: genre,
      });

      return res.json(tracks);
    } catch (e) {
      next(e);
    }
  }

  async underground(req, res, next) {
    try {
      const { limit = 9, offset = 0 } = req.query;
      const tracks = await trendingService.getTrendingUndergroudTracks({limit, offset});
      return res.json(tracks);
    } catch (e) {
      next(e);
    }
  }

  async weeklyTrending(req, res, next) {
    try {
      const tracks = await trendingService.getTrendingWeeklyTracks();
      return res.json(tracks);
    } catch (e) {
      next(e);
    }
  }

  async weeklyUnderground(req, res, next) {
    try {
      const tracks = await trendingService.getTrendingUndergroundWeeklyTracks();
      return res.json(tracks);
    } catch (e) {
      next(e);
    }
  }

  async search(req, res, next) {
    try {
      const {
        query = "",
        limit = 3,
        offset = 0,
      } = req.query;
      const tracks = await trendingService.getSearch({query, limit, offset});
      return res.json(tracks);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new TrendingTrackController();
