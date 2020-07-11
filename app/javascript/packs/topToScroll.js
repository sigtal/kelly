document.addEventListener('turbolinks:load', function(){
  if(window.innerWidth > 600){
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
    if(window.innerWidth > 1000){
      var px_change = 600;
    }else{
      var px_change = 200;
    };
    window.addEventListener('scroll', function() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if ( scrollTop > px_change ) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }

    });
  }
});
