class RecommendationService {
  async getRecommendationTracks(params) {
    const urlParams = new URLSearchParams(params).toString();
    const url = `${process.env.AUDIUS_API}/tracks/recommended${urlParams ? `?${urlParams}` : ""}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching trending tracks: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }

  async getFeelingLuckyTracks(params) {
    const urlParams = new URLSearchParams(params).toString();
    const url = `${process.env.AUDIUS_API}/tracks/feeling-lucky${urlParams ? `?${urlParams}` : ""}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching trending tracks: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }

  async getMostSharedTracks(params) {
    const urlParams = new URLSearchParams(params).toString();
    const url = `${process.env.AUDIUS_API}/tracks/most-shared${urlParams ? `?${urlParams}` : ""}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching trending tracks: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }

  async getTrendingPlaylists(params) {
    const urlParams = new URLSearchParams(params).toString();
    const url = `${process.env.AUDIUS_API}/playlists/trending​${urlParams ? `?${urlParams}` : ""}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching trending tracks: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
}

module.exports = new RecommendationService();
