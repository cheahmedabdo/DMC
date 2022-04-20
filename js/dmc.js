////////////////////

window.addEventListener("scroll", function () {
  let policy = document.querySelector(".identity");
  if (policy.getBoundingClientRect().top < 650) {
    myMenu.forEach(function (ele) {
      ele.classList.remove("active");
    });
    document.querySelector(".policyLink").classList.add("active");
  }
  ///////////
  let home = document.querySelector(".landing");
  if (home.getBoundingClientRect().top > -50) {
    myMenu.forEach(function (ele) {
      ele.classList.remove("active");
    });
    document.querySelector(".home").classList.add("active");
  }
  let projects = document.querySelector(".ourProjects");
  if (projects.getBoundingClientRect().top < 650) {
    myMenu.forEach(function (ele) {
      ele.classList.remove("active");
    });
    document.querySelector(".projects").classList.add("active");
  }
  let cprojects = document.querySelector(".cuurentProject");
  if (cprojects.getBoundingClientRect().top < 650) {
    myMenu.forEach(function (ele) {
      ele.classList.remove("active");
    });
    document.querySelector(".cproject").classList.add("active");
  }
  let donation = document.querySelector(".donation");
  if (donation.getBoundingClientRect().top < 650) {
    myMenu.forEach(function (ele) {
      ele.classList.remove("active");
    });
    document.querySelector(".donate").classList.add("active");
  }
});

//================ animate welcome text and on load page ======================================================
let i = 0;
let k = 0;

let welcomeTextAr = "فريق لجنة الدلنجات الطبيه";
let myWelcomeSpanAr = document.getElementById("welcomeTextAr");
let welcomeTextEn = "Delengat Medical Committee";
let myWelcomeSpanEn = document.getElementById("welcomeTextEn");

window.onload = function () {
  ////////////////////////////////
  setTimeout(function () {
    let onloadPage = document.querySelector(".loadpage");
    onloadPage.classList.add("loadpageHiden");
  }, 1000);

  setTimeout(function () {
    let x = setInterval(function () {
      myWelcomeSpanAr.innerHTML += welcomeTextAr.split("")[i];
      i++;

      if (myWelcomeSpanAr.innerHTML.length > welcomeTextAr.length - 1) {
        myWelcomeSpanAr.style.border = "none";
        clearInterval(x);
      }
    }, 100);
  }, 1900);

  setTimeout(function () {
    let y = setInterval(function () {
      myWelcomeSpanEn.innerHTML += welcomeTextEn.split("")[k];
      k++;
      if (myWelcomeSpanEn.innerHTML.length > welcomeTextEn.length) {
        myWelcomeSpanEn.style.border = "none";
        clearInterval(y);
      }
    }, 100);
  }, 4400);
  ////////////////////////////////
  setTimeout(function () {
    let dmcName = document.querySelector(".dmcName");
    dmcName.classList.add("h1hiden");
    let landimg = document.querySelector(".welcomeImg");
    landimg.classList.add("reveal");
  }, 1100);
};

////////////////////
