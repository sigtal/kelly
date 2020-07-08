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
    fullImage.querySelectorAll('#fullimage').forEach(function(full){
        full.addEventListener('load', function(){
          var width = full.naturalWidth;
          var height = full.naturalHeight;
          if(width > height){
            full.style.height = '60%'
          }else if (width == height) {
            full.style.width = '50%'
          }else{
            full.style.width = '44%'
          };
        });
    });
  });
});
