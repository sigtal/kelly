document.addEventListener('turbolinks:load', function(){


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
