document.addEventListener('turbolinks:load', function(){

  imageResize();
  document.getElementById('page-fullimage').addEventListener('load', function(){
    var width = this.naturalWidth;
    var height = this.naturalHeight;
    if(window.innerWidth > 600){
      if(width > height){
        this.style.height = '60%';
      }else if (width == height) {
        this.style.width = '50%';
      }else{
        this.style.width = '44%'
      };
    }else{
      if(width > height){
        this.style.width = '100%'
      }else if (width == height) {
        this.style.width = '100%'
      }else{
        this.style.width = '100%'
      };
    }
  });
});


function imageResize (){
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
          var share = full.parentNode.children[1];
          var newLine1 = full.parentNode.children[1].children[2];
          var newLine2 = full.parentNode.children[1].children[4];
          if(window.innerWidth > 1000){
            if(width > height){
              full.style.height = '60%';
              share.style.top = '5%';
              share.style.right = '30%';
              newLine1.style.display = 'none';
              newLine2.style.display = 'none';
            }else if (width == height) {
              full.style.width = '50%';
              share.style.top = '30%';
              share.style.right = '20%';
              newLine1.style.display = 'block';
              newLine2.style.display = 'block';
            }else{
              full.style.width = '44%'
              share.style.top = '30%';
              share.style.right = '20%';
              newLine1.style.display = 'block';
              newLine2.style.display = 'block';
            };
          }else if(window.innerWidth > 600){
            if(width > height){
              full.style.height = '50%';
              share.style.top = '5%';
              share.style.right = '5%';
              newLine1.style.display = 'none';
              newLine2.style.display = 'none';
            }else if (width == height) {
              full.style.width = '80%';
              share.style.top = '5%';
              share.style.right = '5%';
              newLine1.style.display = 'none';
              newLine2.style.display = 'none';
            }else{
              full.style.width = '70%'
              share.style.top = '5%';
              share.style.right = '2%';
              newLine1.style.display = 'block';
              newLine2.style.display = 'block';
            };
          }else{
            if(width > height){
              full.style.width = '100%'
            }else if (width == height) {
              full.style.width = '100%'
            }else{
              full.style.width = '100%'
            };
          }
        });
    });
  });
}
