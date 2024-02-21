
// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop  > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}


 
// counter design
 document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration /  range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 200, 650, 30000);
    counter("count2", 0, 115, 3000);
    counter("count3", 1000, 6375, 3000);
    counter("count4", 0, 18, 3000);
 });

//  let orderBtn = document.getElementById("main");
//  orderBtn.addEventListener("click", ()=>{
//     console.log("kaam kar raha");
//     window.scrollTo(0,1500)
//  })
   

   

