document.addEventListener('turbolinks', function(){
  var corporate = document.getElementById("corporate");
  var personal = document.getElementById("personal");
  corporate.addEventListener('click', function(){
    var radio = document.getElementsByName("usage");
if (radio[0].checked) {
  document.getElementById("labelegal_entity").style.display = "block";
  document.getElementById("individual").style.display = "none";
};
  });

personal.addEventListener('click', function(){
  var radio = document.getElementsByName("usage");
if(radio[1].checked) {
document.getElementById("individual").style.display = "block";
document.getElementById("labelegal_entity").style.display = "none";
};
});

var copyTrigger = document.getElementById("copyTrigger");
copyTrigger.addEventListener('click', function(){

    var copyTarget = document.getElementById("copyTarget");
    copyTarget.select();
    document.execCommand("Copy");
    var alert = document.getElementById("alert");
    alert.innerHTML = "Copied<span class='japanFont'>（コピーしました）</span>";

});


});
