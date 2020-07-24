document.addEventListener('turbolinks:load', function(){
  var radio = document.getElementsByName("usage");
  var labelegal_entity = document.getElementById("labelegal_entity")
  var individual = document.getElementById("individual")
  // 法人選択
  document.getElementById("corporate").addEventListener('click', function(){
    if (radio[0].checked) {
      labelegal_entity.style.display = "block";
      individual.style.display = "none";
      scroll(window.pageYOffset + labelegal_entity.getBoundingClientRect().top)
    };
  });

  // 個人選択
  document.getElementById("personal").addEventListener('click', function(){
    if(radio[1].checked) {
      individual.style.display = "block";
      labelegal_entity.style.display = "none";
      scroll(window.pageYOffset + individual.getBoundingClientRect().top)
    };
  });

  // コピーボタン
  document.getElementById("copyTrigger").addEventListener('click', function(){
    document.getElementById("copyTarget").select();
    document.execCommand("Copy");
    document.getElementById("alert").innerHTML = "Copied<span class='japanFont'>（コピーしました）</span>";
  });
  function scroll(top){
    console.log(top)
    window.scrollTo({
      top: top,
      behavior: "smooth"
    })
  };
});
