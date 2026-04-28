const trackService = require("../service/track-service");

class TrackController {
  async trending(req, res, next) {
    try {
      const {
        timeRange = "week",
        limit = 9,
        genre = "",
        offset = 0,
      } = req.query;

      const tracks = await trackService.getTrendingTracks({
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
      const tracks = await trackService.getTrendingUndergroudTracks({limit, offset});
      return res.json(tracks);
    } catch (e) {
      next(e);
    }
  }

  async weeklyTrending(req, res, next) {
    try {
      const tracks = await trackService.getTrendingWeeklyTracks();
      return res.json(tracks);
    } catch (e) {
      next(e);
    }
  }

  async weeklyUnderground(req, res, next) {
    try {
      const tracks = await trackService.getTrendingUndergroundWeeklyTracks();
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
      const tracks = await trackService.getSearch({query, limit, offset});
      return res.json(tracks);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new TrackController();
