document.addEventListener('turbolinks:load', function(){
  var illustPostButton = document.getElementById('illust-post-button');
  illustPostButton.addEventListener('click',function(){
    var illustPostForm = document.getElementById('illust-post-form')
    if(illustPostForm.classList.contains('test')){
      illustPostForm.classList.remove('test')
      illustPostForm.style.display = 'none'
      console.log('test.remove');
    }else{
      illustPostForm.classList.add("test");
      illustPostForm.style.display = 'block'
      console.log('test.add');
    }
  });
});
