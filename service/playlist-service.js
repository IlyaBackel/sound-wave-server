const Playlist = require("../model/playlist-model");
const User = require("../model/user-model");
const ApiError = require("../exception/api-error");

class PlaylistService {
  async createPlaylist(userId, { name, description, isPublic }) {
    const user = await User.findById(userId);
    if (!user) {
      throw ApiError.BadRequest("Пользователь не найден");
    }

    let finalName = name;
    if (!finalName || finalName.trim() === "") {
      const nextNumber = (user.playlistCounter || 0) + 1;
      finalName = `My Playlist ${nextNumber}`;
      await User.findByIdAndUpdate(userId, { $inc: { playlistCounter: 1 } });
    }

    const playlist = new Playlist({
      name: finalName.trim(),
      description: description || "",
      user: userId,
      tracks: [],
      isPublic: isPublic !== undefined ? isPublic : true,
    });

    await playlist.save();
    return playlist;
  }

  async getUserPlaylists(userId) {
    return await Playlist.find({ user: userId }).sort({ createdAt: -1 });
  }

  async getPlaylistById(playlistId, userId) {
    const playlist = await Playlist.findById(playlistId);
    if (!playlist) {
      throw ApiError.NotFound("Плейлист не найден");
    }
    if (playlist.user.toString() !== userId) {
      throw ApiError.Forbidden("Нет доступа");
    }
    return playlist;
  }

  async addTrackToPlaylist(playlistId, userId, trackId) {
    if (!trackId) {
      throw ApiError.BadRequest("trackId обязателен");
    }
    const playlist = await Playlist.findById(playlistId);
    if (!playlist) {
      throw ApiError.NotFound("Плейлист не найден");
    }
    if (playlist.user.toString() !== userId) {
      throw ApiError.Forbidden("Нет доступа");
    }
    if (!playlist.tracks.includes(trackId)) {
      playlist.tracks.push(trackId);
      await playlist.save();
    }
    return playlist;
  }

  async removeTrackFromPlaylist(playlistId, userId, trackId) {
    const playlist = await Playlist.findById(playlistId);
    if (!playlist) {
      throw ApiError.NotFound("Плейлист не найден");
    }
    if (playlist.user.toString() !== userId) {
      throw ApiError.Forbidden("Нет доступа");
    }
    playlist.tracks = playlist.tracks.filter(id => id !== trackId);
    await playlist.save();
    return playlist;
  }

  async deletePlaylist(playlistId, userId) {
    const playlist = await Playlist.findById(playlistId);
    if (!playlist) {
      throw ApiError.NotFound("Плейлист не найден");
    }
    if (playlist.user.toString() !== userId) {
      throw ApiError.Forbidden("Нет доступа");
    }
    await Playlist.deleteOne({ _id: playlistId });
    return { message: "Плейлист удалён" };
  }

  async getUserPublicPlaylists(userId) {
    return await Playlist.find({ user: userId, isPublic: true }).sort({ createdAt: -1 });
  }
}

module.exports = new PlaylistService();