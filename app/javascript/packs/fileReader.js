document.addEventListener('turbolinks:load', function(){
  function previewFile(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageUrl = e.target.result;
      const img = document.getElementById('fullimage-illust');
      const trimmingTarget = document.getElementById('trimmingTarget');
      img.src = imageUrl;
      trimmingTarget.src = imageUrl;
    }
    reader.readAsDataURL(file);
  };
  const fileInput = document.getElementById('fullimage-post');
  const handleFileSelect = () => {
    const files = fileInput.files;
    for (let i = 0; i < files.length; i++) {
      previewFile(files[i]);
    }
  }
  fileInput.addEventListener('change', handleFileSelect);
  fileInput.addEventListener('change', function(){
    var post = document.getElementById("fullimage-postCss")
    post.style.opacity = 1;
  });
});
