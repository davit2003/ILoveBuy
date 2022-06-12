window.onscroll = function (e) {
    let sidebar = document.getElementsByClassName("sidebar")[0];
    let menu = document.getElementsByClassName("navbar")[0];
    
    if(window.scrollY > 80)
        menu.style.background = "#011f5d";
    else
        menu.style.background = "transparent";

    if(window.scrollY > 600)
        sidebar.style.right="0px";
    else
        sidebar.style.right="-40px";
  };

function openclose(obj){
    i = obj.getElementsByClassName("fa-solid")[0];
    if(i.classList.contains("fa-plus")){
        i.classList.remove("fa-plus");
        i.classList.add("fa-minus")
    }
    else{
        i.classList.remove("fa-minus")
        i.classList.add("fa-plus");
    }
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

var swiper1 = new Swiper(".mySwiper1", {
  loop: "true",
  effect: "fade",
  direction: "vertical",
  swipeHandler: "null"
});

swiper.on('slideChange', function () {
  i = swiper.realIndex;
  swiper1.slideToLoop(i, 0, false);
  changeImage(i);
});

function changeImage(ind){  
  let back = document.getElementById("background2");
  ind++;
  back.src = "img/Asset " + ind + ".png";
  console.log(back.src);
}