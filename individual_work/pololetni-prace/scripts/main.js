const shadow = function (shadowbox) {
  shadowbox.style.background =
    "linear-gradient(to bottom, rgba(0,0,0,0.3),  rgba(0,0,0,0), rgba(0,0,0,0.3))";
};

const unshadow = function (shadowbox) {
  shadowbox.style.background = "none";
};

const imageGalleryDivs = document.querySelectorAll(
  ".image-gallery div div.shadowbox"
);
imageGalleryDivs.forEach((shadowbox) => {
  //
  shadowbox.addEventListener("mouseover", function () {
    shadow(shadowbox);
  });
  //
  shadowbox.addEventListener("mouseout", function () {
    unshadow(shadowbox);
  });
});
