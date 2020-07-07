document.addEventListener('turbolinks:load', function(){
  var element = document.getElementById( "header" ) ;
  var scrollButton = document.getElementById( "topScroll" )

  // 一番上にスクロール
  scrollButton.onclick = function () {
    element.scrollIntoView( {
      behavior: "smooth",
      block: "start"
    });
  };

  // スクロールボタンを表示・非表示
  var px_change = 600;
  window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if ( scrollTop > px_change ) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  });

});
