/*
DOCUMENTATION IntersectionObserver
Articles:
https://blog.webdevsimplified.com/2022-01/intersection-observer/

Videos:
https://www.youtube.com/watch?v=2IbRtjez6ag
*/

/*
threshold -> Percentage of the element must be visible before isIntersecting becomes true.
*/

const options = {
  threshold: 1,
  rootMargin: "100px"
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const intersecting = entry.isIntersecting;

    entry.target.classList.toggle('square-animation', intersecting);
  })
}, options);

document.addEventListener("DOMContentLoaded", function(){
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => {
      observer.observe(square);
    })
});
