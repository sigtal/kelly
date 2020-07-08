document.addEventListener('turbolinks:load', function(){
  function previewFile1(file) {
    // プレビュー画像を追加する要素

    // FileReaderオブジェクトを作成
    const reader1 = new FileReader();

    // URLとして読み込まれたときに実行する処理
    reader1.onload = function (e) {
      const imageUrl1 = e.target.result; // URLはevent.target.resultで呼び出せる
      const img1 = document.getElementById('fullimage-illust'); // img要素を作成
      img1.src = imageUrl1; // URLをimg要素にセット
    }

    // いざファイルをURLとして読み込む
    reader1.readAsDataURL(file);
  };
  const fileInput1 = document.getElementById('fullimage-post');
const handleFileSelect1 = () => {
  const files1 = fileInput1.files;
  for (let i = 0; i < files1.length; i++) {
    previewFile1(files1[i]);
  }
}
  fileInput1.addEventListener('change', handleFileSelect1);
  function previewFile2(file) {
    // プレビュー画像を追加する要素

    // FileReaderオブジェクトを作成
    const reader2 = new FileReader();

    // URLとして読み込まれたときに実行する処理
    reader2.onload = function (e) {
      const imageUrl2 = e.target.result; // URLはevent.target.resultで呼び出せる
      const img2 = document.getElementById('avatar-illust'); // img要素を作成
      img2.src = imageUrl2; // URLをimg要素にセット
    }

    // いざファイルをURLとして読み込む
    reader2.readAsDataURL(file);
  };
  const fileInput2 = document.getElementById('avatar-post');
const handleFileSelect2 = () => {
  const files2 = fileInput2.files;
  for (let i = 0; i < files2.length; i++) {
    previewFile2(files2[i]);
  }
}
  fileInput2.addEventListener('change', handleFileSelect2);
});
