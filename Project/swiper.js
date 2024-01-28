AOS.init();

var swiper = new Swiper(".mySwiper", {
slidesPerView: 3,
autoplay:true,
pagination: {
el: ".swiper-pagination",
clickable: true,
},
breakpoints:({
320:
{
    slidesPerView:1,
},
480:
{
    slidesPerView:1,
},
578:
{
    slidesPerView:1,
},
778:
{
    slidesPerView:2,
},
1100:
{
    slidesPerView:3,
},
1200:
{
    slidesPerView:3,
},  
}),
});