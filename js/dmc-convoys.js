//================ animate welcome text and on load page ======================================================

window.onload = function () {
  let onloadPage = document.querySelector(".loadpage");
  onloadPage.classList.add("loadpageHiden");
  setTimeout(function () {
    document.querySelectorAll(".clipPAth").forEach((e) => {
      e.classList.add("reveal");
    });

    setTimeout(() => {
      document.querySelectorAll(".clipPAth").forEach((ele) => {
        ele.style.transitionDelay = "0s";
      });
    }, 2000);
  }, 1000);
};

/////////////my num
let numsSections = document.querySelectorAll(".cNumbersStyle");
window.addEventListener("scroll", function () {
  numsSections.forEach((ele) => {
    if (ele.getBoundingClientRect().top < 650) {
      if (ele.getAttribute("status") == "0") {
        for (let num of ele.children) {
          startcount(num.children[0]);
        }
        ele.setAttribute("status", "1");
      }
    }
  });
});
function startcount(el) {
  let end = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == end) {
      clearInterval(counter);
    }
  }, 2000 / end);
}
/////////////myThumb

let myThumb = document.querySelectorAll(".thumbnail img");
myThumb.forEach((thumb) => {
  thumb.onclick = () => {
    thumb.parentElement.parentElement.children[0].children[0].src = thumb.src;
  };
});
