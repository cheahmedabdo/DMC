// display myNavUl  ==============================================
let myUl = document.querySelector(".navUl");
let ulBtn = document.querySelector(".toggleMenu");
let li1 = document.getElementById("1");
let li2 = document.getElementById("2");
let li3 = document.getElementById("3");

ulBtn.onclick = () => {
  myUl.classList.toggle("navUlH");
  li1.classList.toggle("liOneHover");
  li2.classList.toggle("liTwoHover");
  li3.classList.toggle("liThreeHover");
  ulBtn.classList.toggle("toggleMenuHover");
};
// make header visible when scroll up and hid when scroll down
let header = document.querySelector("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    header.classList.add("headerHidden");
    document.querySelector(".scrollInd").style.top = "0px";

    //this is to toggle menu when i am scrolling up
    //this is to toggle menu when i am scrolling up
  } else {
    header.classList.remove("headerHidden");
    document.querySelector(".scrollInd").style.top = "74px";
  }
  lastScrollY = window.scrollY;

  //// make scroll bar
  let myLocationScroll = document.documentElement.scrollTop;
  let AllScroll =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  document.querySelector(".scrollInd").style.width =
    (myLocationScroll / AllScroll) * 100 + "%";
});
// dark mode btn
let audio1 = document.querySelector(".myAudio1");
let audio2 = document.querySelector(".myAudio2");

let btn1 = document.querySelector(".fa-sun");
let btn2 = document.querySelector(".fa-moon");
let myHtml = document.querySelector(".color");

if (window.localStorage.getItem("colorMode")) {
  myHtml.classList.add(window.localStorage.getItem("colorMode"));
}
if (window.localStorage.getItem("colorMode") === "sun") {
  btn1.classList.add("darkClick");
  btn2.classList.remove("darkClick");
} else {
  btn2.classList.add("darkClick");
  btn1.classList.remove("darkClick");
}

btn1.onclick = function () {
  btn1.classList.toggle("darkClick");
  btn2.classList.toggle("darkClick");
  window.localStorage.setItem("colorMode", "sun");
  myHtml.classList.remove("moon");
  myHtml.classList.add(window.localStorage.getItem("colorMode"));
  audio1.play();
};
btn2.onclick = function () {
  btn1.classList.toggle("darkClick");
  btn2.classList.toggle("darkClick");
  window.localStorage.setItem("colorMode", "moon");
  myHtml.classList.remove("sun");
  myHtml.classList.add(window.localStorage.getItem("colorMode"));
  audio2.play();
};
/////////////////

/// remove active class from my menu ==============================================
let myMenu = document.querySelectorAll(".navLink");
myMenu.forEach(function (ele) {
  ele.onclick = function () {
    for (let i = 0; i < myMenu.length; i++) {
      myMenu[i].classList.remove("active");
    }

    ele.classList.add("active");
  };
});
////////////////////

////////////////////////////////////////////////////////// show contact menu
let contactbtn = document.querySelector(".callcenter");
let contactMenu = document.querySelectorAll(".ourLink");
contactbtn.onclick = function () {
  contactbtn.classList.toggle("callcenterh");
  contactMenu.forEach(function (e) {
    e.classList.toggle("contactsHiden");
  });
};

// hide toup button and reveal elements hide to up button  ////////////
let myheight = document.documentElement.clientHeight;
window.onscroll = function () {
  if (window.scrollY <= 600) {
    contactMenu.forEach(function (e) {
      e.classList.add("hideOurLink");
    });
    document.querySelector(".toTop").classList.add("hideToTop");
    document.querySelector(".callcenter").style = "opacity:0;";
  } else {
    contactMenu.forEach(function (e) {
      e.classList.remove("hideOurLink");
    });
    document.querySelector(".toTop").classList.remove("hideToTop");
    document.querySelector(".callcenter").style.opacity = "1";
  }
  ////////////////////

  let myheight = document.documentElement.clientHeight;

  let upreveal = document.querySelectorAll(".uReveal");
  upreveal.forEach(function (e) {
    if (e.getBoundingClientRect().top < 650) {
      e.classList.add("reveal");
    } else {
      e.classList.remove("reveal");
    }
  });

  let downreveal = document.querySelectorAll(".dReveal");
  downreveal.forEach(function (e) {
    if (e.getBoundingClientRect().top < 650) {
      e.classList.add("reveal");
    } else {
      e.classList.remove("reveal");
    }
  });
  let rightreveal = document.querySelectorAll(".rReveal");
  rightreveal.forEach(function (e) {
    if (e.getBoundingClientRect().top < 650) {
      e.classList.add("reveal");
    } else {
      e.classList.remove("reveal");
    }
  });
  let leftreveal = document.querySelectorAll(".lReveal");
  leftreveal.forEach(function (e) {
    if (e.getBoundingClientRect().top < 650) {
      e.classList.add("reveal");
    } else {
      e.classList.remove("reveal");
    }
  });
  let holereveal = document.querySelectorAll(".hReveal");
  holereveal.forEach(function (e) {
    if (e.getBoundingClientRect().top < 650) {
      e.classList.add("reveal");
    } else {
      e.classList.remove("reveal");
    }
  });
  myUl.classList.remove("navUlH");
  li1.classList.remove("liOneHover");
  li2.classList.remove("liTwoHover");
  li3.classList.remove("liThreeHover");
  ulBtn.classList.remove("toggleMenuHover");
};
