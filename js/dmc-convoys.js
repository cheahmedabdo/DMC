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
/////////////////////////////// c1 //////////
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
function startcount(el) {
  let end = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == end) {
      clearInterval(counter);
    }
  }, 2000 / end);
}
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
function startcount(el) {
  let end = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == end) {
      clearInterval(counter);
    }
  }, 2000 / end);
}
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
function startcount(el) {
  let end = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == end) {
      clearInterval(counter);
    }
  }, 2000 / end);
}
////////4////
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
function startcount(el) {
  let end = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == end) {
      clearInterval(counter);
    }
  }, 2000 / end);
}
////////5////
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
function startcount(el) {
  let end = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == end) {
      clearInterval(counter);
    }
  }, 2000 / end);
}
////////6////
let numsSection6 = document.querySelector(".c6Numbers");
let myNums6 = document.querySelectorAll(".c6nums");
let started6 = false;
window.addEventListener("scroll", function () {
  if (myheight - numsSection6.getBoundingClientRect().top > 50) {
    if (!started6) {
      myNums6.forEach((num) => startcount(num));
      started6 = true;
    }
  }
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
////////7////
let numsSection7 = document.querySelector(".c7Numbers");
let myNums7 = document.querySelectorAll(".c7nums");
let started7 = false;
window.addEventListener("scroll", function () {
  if (myheight - numsSection7.getBoundingClientRect().top > 50) {
    if (!started7) {
      myNums7.forEach((num) => startcount(num));
      started7 = true;
    }
  }
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
////////8////
let numsSection8 = document.querySelector(".c8Numbers");
let myNums8 = document.querySelectorAll(".c8nums");
let started8 = false;
window.addEventListener("scroll", function () {
  if (myheight - numsSection8.getBoundingClientRect().top > 50) {
    if (!started8) {
      myNums8.forEach((num) => startcount(num));
      started8 = true;
    }
  }
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
////////9////
let numsSection9 = document.querySelector(".c9Numbers");
let myNums9 = document.querySelectorAll(".c9nums");
let started9 = false;
window.addEventListener("scroll", function () {
  if (myheight - numsSection9.getBoundingClientRect().top > 50) {
    if (!started9) {
      myNums9.forEach((num) => startcount(num));
      started9 = true;
    }
  }
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
////////10////
let numsSection10 = document.querySelector(".c10Numbers");
let myNums10 = document.querySelectorAll(".c10nums");
let started10 = false;
window.addEventListener("scroll", function () {
  if (myheight - numsSection10.getBoundingClientRect().top > 50) {
    if (!started10) {
      myNums10.forEach((num) => startcount(num));
      started10 = true;
    }
  }
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
////////11////
let numsSection11 = document.querySelector(".c11Numbers");
let myNums11 = document.querySelectorAll(".c11nums");
let started11 = false;
window.addEventListener("scroll", function () {
  if (myheight - numsSection11.getBoundingClientRect().top > 50) {
    if (!started11) {
      myNums11.forEach((num) => startcount(num));
      started11 = true;
    }
  }
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
/////////////ظظظظ
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
let thumb5 = document.querySelectorAll(".thumb5");
let mainImg5 = document.querySelector(".mainImg5");

thumb5.forEach((ele) => {
  ele.onclick = () => {
    mainImg5.setAttribute("src", ele.getAttribute("src"));
  };
});
let thumb6 = document.querySelectorAll(".thumb6");
let mainImg6 = document.querySelector(".mainImg6");

thumb6.forEach((ele) => {
  ele.onclick = () => {
    mainImg6.setAttribute("src", ele.getAttribute("src"));
  };
});
let thumb7 = document.querySelectorAll(".thumb7");
let mainImg7 = document.querySelector(".mainImg7");

thumb7.forEach((ele) => {
  ele.onclick = () => {
    mainImg7.setAttribute("src", ele.getAttribute("src"));
  };
});
let thumb8 = document.querySelectorAll(".thumb8");
let mainImg8 = document.querySelector(".mainImg8");

thumb8.forEach((ele) => {
  ele.onclick = () => {
    mainImg8.setAttribute("src", ele.getAttribute("src"));
  };
});
let thumb9 = document.querySelectorAll(".thumb9");
let mainImg9 = document.querySelector(".mainImg9");

thumb9.forEach((ele) => {
  ele.onclick = () => {
    mainImg9.setAttribute("src", ele.getAttribute("src"));
  };
});
let thumb10 = document.querySelectorAll(".thumb10");
let mainImg10 = document.querySelector(".mainImg10");

thumb10.forEach((ele) => {
  ele.onclick = () => {
    mainImg10.setAttribute("src", ele.getAttribute("src"));
  };
});
let thumb11 = document.querySelectorAll(".thumb11");
let mainImg11 = document.querySelector(".mainImg11");

thumb11.forEach((ele) => {
  ele.onclick = () => {
    mainImg11.setAttribute("src", ele.getAttribute("src"));
  };
});
