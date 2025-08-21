// const blocks = document.querySelectorAll(".block");



const options = {
  threshold: 1.5,
  rootMargin: "20px"
};

//cual es el objectivo de rootMargin?
//rootMargin -> A margin around the root. It can be used to grow or shrink the
//intersection area. For example, a value of "100px" will grow the intersection area

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      console.log(entry);
      entry.target.classList.add("moving")
    } else {
      entry.target.classList.remove("moving");
    }
  })
, options});

// blocks.forEach(block => {
//   observer.observe(block);
// })

document.addEventListener("DOMContentLoaded", function(){
  const blocks = document.querySelectorAll(".block");
  blocks.forEach(block => {
      observer.observe(block);
    })
});
