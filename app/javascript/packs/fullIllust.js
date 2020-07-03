document.addEventListener('turbolinks:load', function(){
  document.querySelectorAll('.illust-container').forEach(function(illust){
    var image = illust.children[0].children[0].children[0];
    var fullImage = illust.nextElementSibling;
    image.addEventListener('click', function(){
      fullImage.style.display = 'block';
    });
    document.querySelectorAll('.close').forEach(function(close){
      close.addEventListener('click',function(){
        fullImage.style.display = 'none';
      });
    });
    document.querySelectorAll('.fullimage').forEach(function(close){
      close.addEventListener('click',function(){
        fullImage.style.display = 'none';
      });
    });
  });
});
