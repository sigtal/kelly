document.addEventListener('turbolinks:load', function(){
  var content = document.querySelectorAll(".content")
  content.forEach(function(thumbContent){
    var canvas = thumbContent.children[0]
    var thumbSize = thumbContent.children[1].value.split(',')
    var originImage = thumbContent.children[2]
    var ctx = canvas.getContext('2d');
    originImage.addEventListener("load",function(){
      canvas.width = thumbSize[2];
      canvas.height = thumbSize[3];
      ctx.drawImage(originImage,thumbSize[0],thumbSize[1],thumbSize[2],thumbSize[3],0,0,thumbSize[2],thumbSize[3])
      canvas.style.width = '100%'
      canvas.style.height = '100%'
    })
  });
});
