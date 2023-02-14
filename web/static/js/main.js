var searchBtn = $("#search-btn");
var search = $("#search");
var spinner = $("#spinner");
var source = $("#musics-template").html();
var template = Handlebars.compile(source);
var searchResult = $("#search-result");

$("form").submit(function (e) {
  e.preventDefault();
  searchMusic();
});

// function searchMusic() {
//   spinner.show(); // spinner를 보여주고
//   searchResult.html(""); //search-result를 찾아 초기화
//   var val = search.val(); //search창에 사용자가 입력한 value값을 반환
//   var encodeVal = encodeURIComponent(val); //uri로 데이터를 전달하기 위한 문자열을 인코딩 (A–Z a–z 0–9 - _ . ! ~ * ' ( )을 제외한 모든 문자를 escape처리)
//   console.log(encodeVal); //인코딩한 값을 console log로 확인
//   $.getJSON(
//     //JSON 형태의 데이터를 가져와서 요청 성공시 done메소드로 콜백함수 실행
//     "data_fi.json"
//   ).done(function (data) {
//     var context = data;
//     console.log(context.musics);
//     if (context.musics.length === 0) {
//       searchResult.html("해당 곡이 없습니다.");
//     } else {
//       var html = template(context); //템플릿의 data(context)를 불러와서 html 변수로 저장
//       searchResult.html(html); //기존 html에 search-result항목을 찾아 위의 html 변수를 반환
//     }
//     spinner.hide();
//   });
// }

function searchMusic() {
  spinner.show();
  searchResult.html("");
  var val = search.val();
  // DB에서 user가 입력한 value를 인코딩한 값을 검색해서 찾아 값을 반환
  console.log(val);
  $.getJSON("data_fi.json").function (data) 
    var resultHtml = data.reduce(function (prev, next)) {
      resultHtml += bindTemplate(item);
    };
  };
  

// $(document).ready(function(){

  

//   $.getJSON('http://api.wipmania.com/jsonp?callback=?', function (data) {
  
//     $("#lat").text(data.latitude);  
//     $("#long").text(data.longitude);  
//     $("#country").text(data.country);      
  
//   });
// });
