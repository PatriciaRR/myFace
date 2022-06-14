// document.addEventListener("DOMContentLoaded", function () {
//   // Add your JavaScript here.
// });

const posts = document.getElementsByClassName("individual-posts");

document.getElementById("color-change").addEventListener("click", function () {
  for (let individualPost in posts) {
    let randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;
    posts[individualPost].style["background-color"] = randomColor;
  }
});

document.getElementById("normal-color").addEventListener("click", function () {
  for (let individualPost in posts)
    if (posts[individualPost].style["background-color"] !== "#c9c9c9") {
      posts[individualPost].style["background-color"] = "#c9c9c9";
    }
});
