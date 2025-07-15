const slider = document.querySelector(".holder-img");
const images = document.querySelectorAll(".imgs");
const nextBtn = document.getElementById("right-arrow");
const prevBtn = document.getElementById("left-arrow");
const btest = document.getElementById("jstest");

let index = 0; // المؤشر الحالي للصورة

// تحديث موضع السلايدر
function updateSlider() {
    slider.style.transform = `translateX(${-index * 100}%)`;
}

// الزر الأيمن: الانتقال للصورة التالية
nextBtn.addEventListener("click", () => {
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0; // يرجع لأول صورة
    }
    updateSlider();
});

// الزر الأيسر: العودة للصورة السابقة
prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
    } else {
        index = images.length - 1; // يرجع لآخر صورة
    }
    updateSlider();
});

// تحريك الصور تلقائيًا كل 5 ثوانٍ
setInterval(() => {
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0;
    }
    updateSlider();
}, 8000);







  // حفظ السكروول قبل الإغلاق
  window.addEventListener("beforeunload", function () {
    sessionStorage.setItem("scrollPos", window.scrollY);
  });

  // استرجاع السكروول بعد التحميل
  window.addEventListener("DOMContentLoaded", function () {
    const scrollPos = sessionStorage.getItem("scrollPos");
    if (scrollPos !== null) {
      window.scrollTo(0, parseInt(scrollPos));
    }
  });

  

 addEventListener("scroll", () => {
    let numberS = 900
    
    if(scrollY >= numberS){
        btest.classList.remove("sec18hideb");
    }else{
        btest.classList.add("sec18hideb");
    }
      
     });


// const btest = document.getElementById("jstest");

// window.addEventListener("scroll", () => {
//   let numberS = 900;

//   if (window.scrollY >= numberS) {
//     btest.classList.remove("sec18hideb");
//   } else {
//     btest.classList.add("sec18hideb");
//   }
// });