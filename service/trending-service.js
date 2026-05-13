class TrendingService {

  async getTrendingTracks(params) {
    const urlParams = new URLSearchParams(params).toString();
    const url = `${process.env.AUDIUS_API}/tracks/trending${urlParams ? `?${urlParams}` : ""}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching trending tracks: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }

  async getTrendingUndergroudTracks(params){
    const urlParams = new URLSearchParams(params).toString();
    console.log(urlParams);
    const url = `${process.env.AUDIUS_API}/tracks/trending/underground${urlParams ? `?${urlParams}` : ""}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching trending tracks: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }

  async getTrendingWeeklyTracks(){
    const url = `${process.env.AUDIUS_API}/tracks/trending/winners`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching trending tracks: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }

  async getTrendingUndergroundWeeklyTracks(){
    const url = `${process.env.AUDIUS_API}/tracks/trending/underground/winners`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching trending tracks: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } 

  // async getSearch(params){
  //   const urlParams = new URLSearchParams(params).toString();
  //   const url = `${process.env.AUDIUS_API}/search/autocomplete${urlParams ? `?${urlParams}` : ""}`;
  //   const response = await fetch(url);
  //   if (!response.ok) {
  //     throw new Error(`Error fetching search tracks: ${response.status}`);
  //   }
  //   const data = await response.json();
  //   return data;
  // }

}

module.exports = new TrendingService();
