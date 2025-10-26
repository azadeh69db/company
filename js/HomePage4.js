const btntodayEl=document.querySelector(".btnToday");
const filterDivEl=document.querySelector(".filterDiv")
const  TodayProductEl=document.querySelector(".TodayProduct");
btntodayEl.addEventListener("click" , myFunction1);
function myFunction1(){
  TodayProductEl.style.backgroundColor="red";
  filterDivEl.classList.remove("specialProduct");
}

const btnSpecialEl=document.querySelector(".btnSpecial");
const  specialProductEl=document.querySelector(".specialProduct");
btnSpecialEl.addEventListener("click" , myFunction2);
function myFunction2(){
 specialProductEl.style.backgroundColor="blue";
  filterDivEl.classList.remove("TodayProduct");
}

const btnHomeEl=document.querySelector(".btnHome");
const  HomeProductEl=document.querySelector(".HomeProduct");
btnHomeEl.addEventListener("click" , myFunction3);
function myFunction3(){
 HomeProductEl.style.backgroundColor="green";
  filterDivEl.classList.remove("TodayProduct");
}