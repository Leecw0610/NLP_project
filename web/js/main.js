var searchBtn = $("#search-btn");
var search = $("#search");
var spinner = $("#spinner");
var source = $("#musics-template").html();
var template = Handlebars.compile(source);
var searchResult = $("#search-result");
spinner.hide();

$("form").submit(function (e) {
  e.preventDefault();
  searchMusic();
});
function searchMusic() {
  spinner.show();
  searchResult.html("");
  var val = search.val();
  var encodeVal = encodeURIComponent(val);
  console.log(encodeVal);
  $.getJSON(
    "https://api.douban.com/v2/music/search?callback=?&q=" + encodeVal
  ).done(function (data) {
    var context = data;
    console.log(context.musics);
    if (context.musics.length === 0) {
      searchResult.html("find nothing...X_X");
    } else {
      var html = template(context);
      searchResult.html(html);
    }
    $("#spinner").hide();
  });
}
