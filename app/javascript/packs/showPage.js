document.addEventListener('turbolinks:load', function(){
  var showPage = document.getElementById('page-fullimage')
  showPage.addEventListener('load', function(){
    console.log("foo")
    var width = this.naturalWidth;
    var height = this.naturalHeight;
    if(window.innerWidth > 1030){
      console.log("bar")
      if(width > height){
        showPage.style.height = '60%';
      }else if (width == height) {
        showPage.style.width = '50%';
      }else{
        showPage.style.width = '44%'
      };
    }else if(window.innerWidth > 600){
      console.log("baz")
      if(width > height){
        showPage.style.height = '50%';
      }else if (width == height) {
        showPage.style.width = '80%';
      }else{
        showPage.style.width = '70%'
      };
    }else{
      if(width > height){
        showPage.style.width = '100%'
      }else if (width == height) {
        showPage.style.width = '100%'
      }else{
        showPage.style.width = '100%'
      };
    };
  });
});
