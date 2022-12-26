/*Kek*/
var lastfmData = {
    baseURL: "https://ws.audioscrobbler.com/2.0/?method=user.getrecent",
    user: "tracks&user=saivdoesntskid",
    additional: "b52dd69ab009d&format=json&limit=1",
    lfmenca: "c78a3656ac59766f11d"
};
/*Kek*/

var gaxgas = function() {
    $["ajax"]({
        type: "GET",
        url: `${lastfmData["baseURL"]}${lastfmData["user"]}&api_key=${lastfmData["lfmenca"]}${lastfmData["additional"]}`,
        dataType: "json",
        success: function(res) {
            var currentTrack = res["recenttracks"]["track"][0];
            var notUsed = currentTrack["name"];
            $("a#tracktitle")["html"]( `<a style="color:#979A9A;"> Listening to <b class="rainbow">${currentTrack["name"]}</b> by <b class="rainbow">${currentTrack["artist"]["#text"]}</b> on <a style="color:#1DB954;">Spotify`)["attr"]("href", currentTrack["url"])["attr"]("target", "_blank");
        },
        error: function(err) {
            $('a#tracktitle')['html']('');
        }
    })
};
gaxgas();
setInterval(gaxgas, 5 * 1000);