window.onload = function () {
  let onloadPage = document.querySelector(".loadpage");
  onloadPage.classList.add("loadpageHiden");
  setTimeout(function () {
    document.querySelector(".mCareLandingContnet").classList.add("reveal");
  }, 1500);
  setTimeout(function () {
    document.querySelector(".mCareLandingH1").classList.add("reveal");
  }, 1500);
};
