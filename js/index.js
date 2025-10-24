const cartEl = document.querySelector(".cart");
const msgEl = document.querySelector(".messagecart")
const closecartEL = document.querySelector(".closecart")
const overlayEl = document.querySelector(".overlay")

// shoe message and overlay

cartEl.addEventListener("click", showcart);

function showcart() {
    msgEl.classList.add("active")
    overlayEl.classList.add("active")

}
// close message and overlay

function closecart() {
    msgEl.classList.remove("active")
    overlayEl.classList.remove("active")

}

closecartEL.addEventListener("click", closecart)


overlayEl.addEventListener("click" ,closecart)


//search input

const searchinputEl = document.querySelector(".inputclass");

const resultsearchEl= document.querySelector(".resultsearch");

const products = ["Apple" , "Orange" , " Banana"]


searchinputEl.addEventListener("input" , function (){
    resultsearchEl.innerHTML="";
    const query = this.value.toLowerCase().trim();
    if(query==="")
    {
        resultsearchEl.innerHTML="";
        return;
    }

    const fliterEl= products.filter(item=>
    item.toLowerCase().includes(query)
)

fliterEl.forEach(item=>{
    const li = document.createElement("li")
    li.textContent = item;
    resultsearchEl.appendChild(li);
})
})

//Slider

function nextSlide(){
  plusSlides(1)
}

let slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} autoSlide = setInterval(nextSlide, 2000);



//slider2


// const slider = document.getElementById("slider");
// const slide = document.getElementById("slide");
// const nextBtn = document.querySelector(".pro-next");
// const prevBtn = document.querySelector(".pro-prev");

// const itemWidth = 220; // عرض آیتم + فاصله
// const totalItems = slide.children.length;
// const visibleItems = 4; // چند آیتم هم‌زمان نمایش داده می‌شود

// // Clone کردن آیتم‌ها برای حلقه بی‌نهایت
// for (let i = 0; i < visibleItems; i++) {
//   const clone = slide.children[i].cloneNode(true);
//   slide.appendChild(clone);
// }

// let position = 0;

// function goToSlide(pos) {
//   slide.style.transform = `translateX(${-pos * itemWidth}px)`;
// }

// function nextSlide() {
//   position++;
//   slide.style.transition = "transform 0.5s ease";
//   goToSlide(position);

//   if (position >= totalItems) {
//     setTimeout(() => {
//       slide.style.transition = "none";
//       position = 0;
//       goToSlide(position);
//     }, 500);
//   }
// }

// function prevSlide() {
//   if (position === 0) {
//     slide.style.transition = "none";
//     position = totalItems;
//     goToSlide(position);
//     setTimeout(() => {
//       slide.style.transition = "transform 0.5s ease";
//       position--;
//       goToSlide(position);
//     }, 20);
//   } else {
//     position--;
//     slide.style.transition = "transform 0.5s ease";
//     goToSlide(position);
//   }
// }

// nextBtn.addEventListener("click", nextSlide);
// prevBtn.addEventListener("click", prevSlide);

// // حرکت خودکار
// setInterval(nextSlide, 19000);

document.querySelectorAll(".slider").forEach(sliderContainer => {
  const slide = sliderContainer.querySelector(".slide");
  const nextBtn = sliderContainer.querySelector(".pro-next");
  const prevBtn = sliderContainer.querySelector(".pro-prev");

  const itemWidth = 220;
  const totalItems = slide.children.length;
  const visibleItems = 4;

  // Clone کردن آیتم‌ها برای حلقه بی‌نهایت
  for (let i = 0; i < visibleItems; i++) {
    const clone = slide.children[i].cloneNode(true);
    slide.appendChild(clone);
  }

  let position = 0;

  function goToSlide(pos) {
    slide.style.transform = `translateX(${-pos * itemWidth}px)`;
  }

  function nextSlide() {
    position++;
    slide.style.transition = "transform 0.5s ease";
    goToSlide(position);

    if (position >= totalItems) {
      setTimeout(() => {
        slide.style.transition = "none";
        position = 0;
        goToSlide(position);
      }, 500);
    }
  }

  function prevSlide() {
    if (position === 0) {
      slide.style.transition = "none";
      position = totalItems;
      goToSlide(position);
      setTimeout(() => {
        slide.style.transition = "transform 0.5s ease";
        position--;
        goToSlide(position);
      }, 20);
    } else {
      position--;
      slide.style.transition = "transform 0.5s ease";
      goToSlide(position);
    }
  }

  if(nextBtn) nextBtn.addEventListener("click", nextSlide);
  if(prevBtn) prevBtn.addEventListener("click", prevSlide);

  // حرکت خودکار
  setInterval(nextSlide, 1900);
});
//slideblog

var slideIndexblog = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlidesblog");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexblog++;
  if (slideIndexblog > x.length) {slideIndexblog = 1} 
  x[slideIndexblog-1].style.display = "block"; 
  setTimeout(carousel, 2000); 
}


