(function() {
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.header__menu')
	const menuCloseItem = document.querySelector('.header-menu__close')
		burger.addEventListener('click' , () =>{
			menu.classList.add('header__menu_active')
		});
		menuCloseItem.addEventListener('click' , () =>{
			menu.classList.remove('header__menu_active')
		});
}());




// $(document).ready(function(){
// 	$('.response__items').slick({
// 		initialSlide:3,
		
// 		 slidesToShow: 3,
		
// 	});
// });


// $('.response__items').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: false,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });


$('.response__items').slick({
	centerMode: false,
	touchThreshold:10,
  dots: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
  {
      breakpoint: 1200,
      settings: {
      	initialSlide:1,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        // infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});