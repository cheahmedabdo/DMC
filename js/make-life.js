function startcount(el) {
  let end = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == end) {
      clearInterval(counter);
    }
  }, 2000 / end);
}
let myNums = document.querySelectorAll(".cnums");
let numsSection = document.querySelector(".cNumbers");
let started = false;
window.addEventListener("scroll", function () {
  if (myheight - numsSection.getBoundingClientRect().top > 50) {
    if (!started) {
      myNums.forEach((num) => startcount(num));
      started = true;
    }
  }
});
////////2////
let numsSection2 = document.querySelector(".c2Numbers");
let myNums2 = document.querySelectorAll(".c2nums");
let started2 = false;
window.addEventListener("scroll", function () {
  if (myheight - numsSection2.getBoundingClientRect().top > 50) {
    if (!started2) {
      myNums2.forEach((num) => startcount(num));
      started2 = true;
    }
  }
});

////////3////
let numsSection3 = document.querySelector(".c3Numbers");
let myNums3 = document.querySelectorAll(".c3nums");
let started3 = false;
window.addEventListener("scroll", function () {
  if (myheight - numsSection3.getBoundingClientRect().top > 50) {
    if (!started3) {
      myNums3.forEach((num) => startcount(num));
      started3 = true;
    }
  }
});

////////clothes////
let numsSection4 = document.querySelector(".c4Numbers");
let myNums4 = document.querySelectorAll(".c4nums");
let started4 = false;
window.addEventListener("scroll", function () {
  if (myheight - numsSection4.getBoundingClientRect().top > 50) {
    if (!started4) {
      myNums4.forEach((num) => startcount(num));
      started4 = true;
    }
  }
});

////////clothes////
let numsSection5 = document.querySelector(".c5Numbers");
let myNums5 = document.querySelectorAll(".c5nums");
let started5 = false;
window.addEventListener("scroll", function () {
  if (myheight - numsSection5.getBoundingClientRect().top > 50) {
    if (!started5) {
      myNums5.forEach((num) => startcount(num));
      started5 = true;
    }
  }
});

///////////////////////////////
let thumb1 = document.querySelectorAll(".thumb1");
let mainImg1 = document.querySelector(".mainImg1");

thumb1.forEach((ele) => {
  ele.onclick = () => {
    mainImg1.setAttribute("src", ele.getAttribute("src"));
  };
});
///
let thumb2 = document.querySelectorAll(".thumb2");
let mainImg2 = document.querySelector(".mainImg2");

thumb2.forEach((ele) => {
  ele.onclick = () => {
    mainImg2.setAttribute("src", ele.getAttribute("src"));
  };
});
///
let thumb3 = document.querySelectorAll(".thumb3");
let mainImg3 = document.querySelector(".mainImg3");

thumb3.forEach((ele) => {
  ele.onclick = () => {
    mainImg3.setAttribute("src", ele.getAttribute("src"));
  };
});
let thumb4 = document.querySelectorAll(".thumb4");
let mainImg4 = document.querySelector(".mainImg4");

thumb4.forEach((ele) => {
  ele.onclick = () => {
    mainImg4.setAttribute("src", ele.getAttribute("src"));
  };
});
