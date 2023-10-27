const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    reverseDirection:true,
    loop: false,
    slidesPerView: innerWidth<750?1:2,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
    },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

document.querySelector('.hamburger').addEventListener(('click'), (e)=>{
    console.log('first')
    let nav = document.querySelector('.pr-navigation')
    let hero = document.querySelector('.Hero')
    nav.classList.toggle('active')
    if (Array.from(nav.classList).includes('active')) {
        hero.classList.add('overlapped')
    }
    else{
        hero.classList.remove('overlapped')
    }
})