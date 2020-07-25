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
  // document.getElementById("copyTrigger").addEventListener('click', function(){
  //   var target1 = document.getElementById("copyTarget1").select();
  //   // var text = document.createElement("textarea");
  //   // text.value = `連絡先メールアドレス:${target1.value}\nお問い合わせ内容:${copyTarget2.value}`;
  //   // document.body.appendChild(text);
  //   // text.select();
  //   document.execCommand("Copy");
  //   // text.style.display = "none";
  //   document.getElementById("alert").innerHTML = "Copied<span class='japanFont'>（コピーしました）</span>";
  // });
  function scroll(top){
    window.scrollTo({
      top: top,
      behavior: "smooth"
    })
  };
});
