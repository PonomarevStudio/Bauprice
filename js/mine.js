$(document).ready(function() {
   
   //Отправка почты с формы   
   $('#form-feedback').submit(function(e) {
      $.ajax({
                 type: "POST",
                 url: 'post.php',
                 data: $('#form-feedback').serialize(),
                 success: function () {
                     $('#ok_txt').fadeIn(200).append('Письмо успешно отправлено!');
					 setTimeout(function(){ $('#ok_txt').fadeOut(800); }, 4000);
					 setTimeout(function(){ $('#ok_txt').html(''); }, 6000);
					 $('#form-feedback')[0].reset();
                 }
      });
      e.preventDefault(); 
   });   


$('.accard li a').click(function(){
      $('.accard li ul').slideUp();
       if ($(this).next().is(":visible")){
           $(this).next().slideUp();
       } else {
           $(this).next().slideToggle();
       }
       return false;
});

// Р СљР ВµР Р…РЎР‹ Р В°Р С”Р В°РЎР‚Р Т‘Р С‘Р С•Р Р… 
$('#menid li ul').hide().prev().click(function(e) {
	e.preventDefault()
	$('#menid li ul').not($(this).next().slideToggle()).slideUp(400);
			
});


	

	
	
   $('.fadeOut').owlCarousel({
		autoplay: true,
		autoplayTimeout: 6000,
		animateOut: 'fadeOut',
		navText: ['',''],
		items: 1,
		loop: true,
		mouseDrag: false,
        touchDrag: false,
		nav: true,
   });	
   
   $('.fadeCustomers').owlCarousel({
		autoplay: true,
		autoplayTimeout: 6000,
		items: 7,
		navText: ['',''],
		loop: true,
		nav: true,
		responsiveClass:true,
		responsive:{
			
			0:{
				items:2
			},
			500:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:7
			},
			1200:{
				items:7
		    
			}
		}
   });
   
   
   $('.blogs-slid').owlCarousel({
		autoplay: true,
		autoplayTimeout: 6000,
		items: 4,
		navText: ['',''],
		loop: true,
		nav: true,
		responsiveClass:true,
		responsive:{
			
			0:{
				items:1
			},
			500:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:4
			},
			1200:{
				items:4
		    
			}
		}
   });
   
   
   var heightH = $(window).height();
   $('.wind-height').css('height',heightH+'px')
	
   $(window).resize(function() {
	   var heightH = $(window).height();
	   $('.wind-height').css('height',heightH+'px')
   })
   
   	$(".project-a").click(function(e){
		var act = $(this).attr('href');
		$(".modal" + act).addClass('active');
		e.preventDefault();
	});
	
	$(".modal-backdrop-close").click(function(e){
		$(".modal").removeClass('active');
		e.preventDefault();
	});	
	
	$(".modal-close").click(function(e){
		$(".modal").removeClass('active');
		e.preventDefault();
	});	
 
   
});


$('.menu').click(function(e) {
	   $('.burger-menu').addClass('active');
       $('.burger-overflow').addClass('active');
	   e.preventDefault();
});

$('.feed-back-bottom').click(function(e) {
	   $('.pop-up-block').addClass('active');
	   e.preventDefault();
});

$('.menu_close_btn, .order-bca').click(function(e) {
	   $('.pop-up-block').removeClass('active');
	   $('.burger-menu').removeClass('active');
	   $('.burger-overflow').removeClass('active');
	   
	   $('.contener-fot').html("");
	   e.preventDefault();
});


$('.full-foto-window').click(function(e) {
	var urlFoto = $(this).attr("href");
	$('.contener-fot').html("<img class='pop-foto' src='"+urlFoto+"' alt=''>");
	 $('.pop-up-block').addClass('active');  
	e.preventDefault();
});

$('.full-foto-portfolio').click(function(e) {
	var urlFoto = $(this).attr("href");
	$('.contener-fot').html("<img class='pop-foto' src='"+urlFoto+"' alt=''>");
	 $('.pop-up-block').addClass('active');  
	e.preventDefault();
});

$('.full-video-window').click(function(e) {
	var urlVideo = $(this).attr("href");
	$('.contener-fot').html('<video controls="controls" autoplay=""><source src="'+urlVideo+'" type="video/mp4"></video>');  
	 $('.pop-up-block').addClass('active');  
	e.preventDefault();
});

$('.full-youtube-window').click(function(e) {
	var urlVideo = $(this).attr("href");
	var fixVid = urlVideo.replace("https://youtu.be/", "");
	$('.contener-fot').html('<iframe src="https://www.youtube.com/embed/'+fixVid+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
	$('.pop-up-block').addClass('active');  
	e.preventDefault();
});







$('.other-project').click(function (e) {
    // $('.project .xl-sn-3, .project .xl-sn-2').fadeIn();
    // $('.blog-items .item').fadeIn();

    let projectNodes = document.querySelectorAll('.project .xl-sn-3.overflow, .project .xl-sn-2.overflow');
    if (projectNodes) for (let i = 0; i < 2; i++) if (projectNodes[i]) projectNodes[i].classList.toggle('overflow', false) && $(projectNodes[i]).fadeIn();

    let blogNodes = document.querySelectorAll('.blog-items .item.overflow');
    if (blogNodes) for (let i = 0; i < 2; i++) if (blogNodes[i]) blogNodes[i].classList.toggle('overflow', false) && $(blogNodes[i]).fadeIn();

    if (!document.querySelector('.project .xl-sn-3.overflow, .project .xl-sn-2.overflow, .blog-items .item.overflow'))
        $('.other-project').css('display', 'none');
    e.preventDefault();
});


	var newSelection = "";
	$(".tabs .tab a").click(function(e){
		$(".tabs .tab a").removeClass("current");
		$(this).addClass("current");
		newSelection = $(this).attr("rel");
		
		$(".project .xl-sn-3, .project .xl-sn-2").not("."+newSelection).slideUp();
		$(".blog-items .item").not("."+newSelection).slideUp();
		
		$("."+newSelection).slideDown();
		e.preventDefault();
	});
	
	
	var newSelection2 = "";
	
	$('select[name="tab"]').on('change', function() {
		
//alert();
		newSelection2 = this.value;
		$(".project .xl-sn-3, .project .xl-sn-2").not("."+newSelection2).slideUp();
		
		$(".blog-items .item").not("."+newSelection2).slideUp();
		
		$("."+newSelection2).slideDown();
		e.preventDefault();
	});

	


/*----------------------------------------------------- */
 /* Accordion and Toggle */
 /*----------------------------------------------------- */
 if ($('.acc-box').length) {
 var $box = $('.acc-box');
 $box.each(function() {
 var $trigger = $('.acc-trigger', $(this));
 $trigger.on('click', function() {
 var $this = $(this);
 if ($this.data('mode') === 'toggle') {
 $this.toggleClass('active').next().stop(true, true).slideToggle(300);
 } else {
 if ($this.next().is(':hidden')) {
 $trigger.removeClass('active').next().slideUp(300);
 $this.toggleClass('active').next().slideDown(300);
 } else if ($this.hasClass('active')) {
 $this.removeClass('active').next().slideUp(300);
 }
 }
 return false;
 });
 });
 }