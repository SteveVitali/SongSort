var EchoNest = {
  fetchSimilarArtists: function(artistId, callback) {
    var config = Spotify.getConfig();
    var url = config.echoNestHost + 'api/v4/artist/similar';
    $.ajax({
      dataType: 'json',
      url: url,
      data: {
        api_key: config.apiKey,
        id: 'spotify:artist:' + artistId,
        bucket: 'id:spotify',
        limit: true
      },
      success: function(data) {
        if (data.response.status.code == 0 &&
          data.response.artists.length) {
          callback(data.response.artists);
        } else {
          console.log('No similars for', artistId);
          callback([]);
        }
      }
    });
  }
};
