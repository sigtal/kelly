document.addEventListener('turbolinks:load', function(){
  var editOpen = document.querySelectorAll("#editOpen")
  editOpen.forEach(function(open){
    open.addEventListener("click",function(){
      editContent = open.nextElementSibling;
      editContent.style.display = "block"
      var originalCategory = editContent.querySelector("#originalCategory").value
      var hash = originalCategory.split(",")
      var editIllustTag = editContent.querySelector("#editIllustTag").querySelectorAll("input")
      hash.forEach(function(origin){
        editIllustTag.forEach(function(tag){
          if(origin.includes(tag.value)){
            tag.checked = true;
          }
        })
      })
      editContent.querySelector("#illustEditClose").addEventListener("click", function(){
        editContent.style.display = "none"
      })
    })
  })
})
