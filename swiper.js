document.addEventListener("DOMContentLoaded", function () {
  const swiperContainer1 = document.querySelector(".swiper-container");
  const swiperBtnNext1 = swiperContainer1.querySelector(".swiper-button-next");
  const swiperBtnPrev1 = swiperContainer1.querySelector(".swiper-button-prev");

  const swiperContainer2 = document.querySelectorAll(".swiper-container")[1];
  const swiperBtnNext2 = swiperContainer2.querySelector(".swiper-button-next");
  const swiperBtnPrev2 = swiperContainer2.querySelector(".swiper-button-prev");

  swiperBtnNext1.addEventListener("click", () => {
    swiperBtnPrev1.style.setProperty("display", "flex", "important");
  });

  swiperBtnNext2.addEventListener("click", () => {
    swiperBtnPrev2.style.setProperty("display", "flex", "important");
  });

  swiperBtnPrev1.style.setProperty("display", "none", "important");
  swiperBtnPrev2.style.setProperty("display", "none", "important");
});
