import smoothscroll from 'smoothscroll-polyfill';

document.addEventListener('turbolinks:load', function(){
  // 滑らかスクロール

  smoothscroll.polyfill();
  document.addEventListener("click", e => {
    const target = e.target;
    if (!target.classList.contains("smoothScroll")) return;
      e.preventDefault();
      const targetId = target.hash;
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
  });

});
