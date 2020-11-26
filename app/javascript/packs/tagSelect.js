document.addEventListener('turbolinks:load', function(){
  var radio = document.getElementsByName("tag");
  var original_tag = document.getElementById("original_tag")
  var fanart_tag = document.getElementById("fanart_tag")

  document.getElementById("original").addEventListener('click', function(){
    if (radio[0].checked) {
      original_tag.style.display = "block";
      fanart_tag.style.display = "none";
    };
  });

  document.getElementById("fanart").addEventListener('click', function(){
    if(radio[1].checked) {
      fanart_tag.style.display = "block";
      original_tag.style.display = "none";
    };
  });





})
