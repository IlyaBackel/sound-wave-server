const playlistService = require("../service/playlist-service");

class PlaylistController {
  async createPlaylist(req, res, next) {
    try {
      const userId = req.user.id;
      const playlist = await playlistService.createPlaylist(userId, req.body);
      return res.json(playlist);
    } catch (e) {
      next(e);
    }
  }

  async getUserPlaylists(req, res, next) {
    try {
      const userId = req.user.id;
      const playlists = await playlistService.getUserPlaylists(userId);
      return res.json(playlists);
    } catch (e) {
      next(e);
    }
  }

  async getPlaylist(req, res, next) {
    try {
      const playlistId = req.params.id;
      const userId = req.user.id;
      const playlist = await playlistService.getPlaylistById(playlistId, userId);
      return res.json(playlist);
    } catch (e) {
      next(e);
    }
  }

  async addTrackToPlaylist(req, res, next) {
    try {
      const playlistId = req.params.id;
      const userId = req.user.id;
      const { trackId } = req.body;
      const playlist = await playlistService.addTrackToPlaylist(playlistId, userId, trackId);
      return res.json(playlist);
    } catch (e) {
      next(e);
    }
  }

  async removeTrackFromPlaylist(req, res, next) {
    try {
      const playlistId = req.params.id;
      const userId = req.user.id;
      const { trackId } = req.body;
      const playlist = await playlistService.removeTrackFromPlaylist(playlistId, userId, trackId);
      return res.json(playlist);
    } catch (e) {
      next(e);
    }
  }

  async deletePlaylist(req, res, next) {
    try {
      const playlistId = req.params.id;
      const userId = req.user.id;
      const result = await playlistService.deletePlaylist(playlistId, userId);
      return res.json(result);
    } catch (e) {
      next(e);
    }
  }

  async getUserPublicPlaylists(req, res, next) {
    try {
      const { userId } = req.params;
      const playlists = await playlistService.getUserPublicPlaylists(userId);
      return res.json(playlists);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new PlaylistController();