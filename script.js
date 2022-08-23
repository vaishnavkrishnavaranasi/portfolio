$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
const formbtn = document.querySelector('.button-area > Button');
const scripturl = "https://script.google.com/macros/s/AKfycbzJoU5YQPW80IukLABq7ox9eWPRZlk3eHEDUiWFEsppJNvOXkfmpj_yIg0FGQLj1nkK/exec";
document.querySelector('.Submitform').addEventListener('submit', (e) =>{
    e.preventDefault();
  const formdata = new FormData();
  formdata.append('name',document.querySelector('.inputname').value);
  formdata.append('email',document.querySelector('.inputemail').value);
  formdata.append('phone number',document.querySelector('.inputphone').value);
  formdata.append('message',document.querySelector('.inputmsg').value);

  fetch(scripturl,{
      mode:"no-cors",
      method:'POST',
      body: formdata
  })
  .then((e) => {
  document.querySelector('.inputname').value = '';
  document.querySelector('.inputemail').value = '';
  document.querySelector('.inputphone').value = '';
  document.querySelector('.inputmsg').value= '';
  formbtn.innerText = 'Message Sent';
  formbtn.classList.add('success');
  setTimeout(() => {
    formbtn.innerText = 'Send Message';
    formbtn.classList.remove('success');
  }, 5000)
  })
  .catch((e) => console.log(e))
  

})