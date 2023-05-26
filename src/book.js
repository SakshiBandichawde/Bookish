let loginForm=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick=()=>{
    loginForm.classList.remove('active');
}



window.onscroll=()=>{
    if(window.scrollY>80){
        document.querySelector('.header .header1').classList.add('active');
    }
    else{
        document.querySelector('.header .header1').classList.remove('active');
    }
}
window.onload=()=>{
    if(window.scrollY>80){
        document.querySelector('.header .header1').classList.add('active');
    }
    else{
        document.querySelector('.header .header1').classList.remove('active');
    }
}

var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides:true,
    autoplay:{
      delay:9500,
      disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".featured-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
      delay:9500,
      disableOnInteraction:false,
    },
    navigation:{
      nextE1:".swiper-button-next",
      prevE1:".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });





  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
      delay:9500,
      disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });



  var sidemenu=document.getElementById("sidemenu")
        function openmenu(){
            sidemenu.style.left="0"
        }
        function closemenu(){
            sidemenu.style.left="-30rem"
          
        }
