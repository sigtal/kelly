document.addEventListener('turbolinks:load', function(){
var element = document.getElementById( "head" ) ;

document.getElementById( "topScroll" ).onclick = function () {
element.scrollIntoView( {
behavior: "smooth",
block: "start"
});
};


var px_change = 600;
window.addEventListener('scroll', function() {
// 変化するポイントまでスクロールしたらクラスを追加
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if ( scrollTop > px_change ) {
document.getElementById( "topScroll" ).style.display = "block";

// 変化するポイント以前であればクラスを削除
} else {
document.getElementById( "topScroll" ).style.display = "none";
}
});

});
