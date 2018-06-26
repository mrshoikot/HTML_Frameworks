/**
*
* ---------------------------------------------------------------------------
*
* Template :    Theme Full Name
* Author :      Themeloop
* Author URI :  http://themeloop.co.nf
* Version :     1.0
*
* --------------------------------------------------------------------------- 
*
*/


/* Custom Js (Jquery) */


jQuery(function($) { 'use strict';


    $(window).on('load', function() {


        /* Preloader */

        $('#preloader').delay(400).fadeOut('slow');


        /* Isotop SetUp */

        // $('.portfolio-menu li').on('click', function(){
        //         $('.portfolio-menu li').removeClass('active-port');
        //         $(this).addClass('active-port');
        //     });

        // var $container = $('#portfolio');
        // $container.isotope({
        //   itemSelector: '.col-sm-4',
        //   layoutMode: 'fitRows'
        // });
        
        // $('#filters').on('click', 'a', function() {
        //   var filterValue = $(this).attr('data-filter');
        //   $container.isotope({ filter: filterValue });
        //   return false;
        // });

    });


    $(document).ready(function() {


        /* Auto Height Home Page Size */

        // function screenheight() {
        //     var homePage = $('#main-header');

        //     homePage.css({
        //         'height': $(window).height() + 'px'
        //     });
        //     return false;
        // }

        // screenheight();
        // $(window).resize(screenheight);


        /* Navbar Auto Change */

        // $(window).on('scroll', function () {
        //     if ($(window).scrollTop() > 200) {
        //         $('#navigation').removeClass('animated-header');           
        //     } else {
        //         $('#navigation').addClass('animated-header');            
        //     }
        //     return false;
        // });


        /* Fast Scroll */

        $('a#fast-scroll').on('click', function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });


        /* WOW Js */

        new WOW( {mobile: false} ).init(); 


        /* Counter Up */

        // $('.countup').counterUp({
        //     delay: 10,
        //     time: 3000
        // }); 


        /* Magnific Popup */

        // $('.magni').magnificPopup({
        //     type:'image',
        //     gallery:{enabled:true},
        //     zoom:{enabled: true, duration: 350},
        //     image: {
        //     verticalFit: true,
        //     titleSrc: function(item) {
        //       return item.el.attr('title') + '<a class="image-source-link" href="'+item.el.attr('data-source')+'">Details</a>';
        //     }
        //   }
        // });

    
    	/* Google Map */

        // function initMap() {

        // var location = new google.maps.LatLng(40.741895, -73.989308); // Replace your location (Latitude, Longitude). You can get from here 'http://www.gps-coordinates.net/'

        // var mapCanvas = document.getElementById('map');
        // var mapOptions = {
        //     center: location,
        //     zoom: 5,  // Upto 22 
        //     panControl: false,
        //     scrollwheel: true,
        //     mapTypeId: google.maps.MapTypeId.ROADMAP
        // }
        // var map = new google.maps.Map(mapCanvas, mapOptions);

        // var markerImage = 'images/googlemap/marker.png'; // Custom Markar 

        // var marker = new google.maps.Marker({
        //     position: location,
        //     map: map,
        //     icon: markerImage
        // });

        // var contentString = '<div class="info-window text-left">' +
               // '<h5 class="small">Your Name</h5>' + // Content Header
               // '<div class="info-content">' +
               // '<p class="small">Your Address</p>' + // Content
               // '</div>' +
               // '</div>';

        // var infowindow = new google.maps.InfoWindow({
        //     content: contentString,
        //     maxWidth: 400
        // });

        // marker.addListener('click', function () {
        //     infowindow.open(map, marker);
        //     return false;
        // });

        // var styles = 
        // [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": 
        // [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": 
        // [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": 
        // [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": 
        // [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": 
        // [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": 
        // [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": 
        // [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": 
        // [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]}];

        // Get More Custom Google Map Background Design In Here 'https://snazzymaps.com/'

        // map.set('styles', styles);

        // }

        // google.maps.event.addDomListener(window, 'load', initMap);
        
    });


    $(document).ready(function() {
        
        /* Owl Carousel */


        // Testimonial Settings

        // $("#clients-carousel").owlCarousel({
        //     itemsCustom: [
        //             [0, 2],
        //             [450, 3],
        //             [600, 3],
        //             [700, 4],
        //             [1000, 4],
        //             [1200, 6],
        //             [1400, 6],
        //             [1600, 6]
        //         ],
        //     autoPlay : 2000,
        //     rewindSpeed: 1500,
        //     pagination : false,
        //     navigation : false,
        //     stopOnHover: true,
        //     transitionStyle : "fade"
        // })


        // Clients Settings
        
        // var owlTesti = $('#testimonial-carousel');
        // owlTesti.owlCarousel({
        //     items: 1,
        //     margin: 0,
        //     autoHeight: true,
        //     rewind:true,
        //     autoplay : true,
        //     autoplayTimeout: 2500,
        //     autoplayHoverPause: true,
        //     dots: true
        // });


        //  Related Post Settings

        // var owlBlog = $('#post-carousel-blog');
        //       owlBlog.owlCarousel({
        //         items:   3,
        //         responsive:{
        //             0:{
        //                 items:1
        //             },
        //             600:{
        //                 items:2
        //             },
        //             1000:{
        //                 items:3
        //             }
        //         },
        //         margin: 4,
        //         rewind:true,
        //         autoHeight: true,
        //         autoplay : true,
        //         autoplayTimeout: 2500,
        //         autoplayHoverPause: true,
        //         paginationSpeed: 400,
        //         navigation: true,
        //         pagination: false,
        //         nav: true,
        //         navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
        //         dots: false
        //       });


        // var owlFolio = $('#carousel-portfolio');
        //       owlFolio.owlCarousel({
        //         items:   4,
        //         responsive:{
        //             0:{
        //                 items:1
        //             },
        //             400: {
        //                 items:2
        //             },
        //             600:{
        //                 items:3
        //             },
        //             1000:{
        //                 items:4
        //             }
        //         },
        //         margin: 8,
        //         rewind:true,
        //         autoHeight: true,
        //         autoplay : true,
        //         autoplayTimeout: 2500,
        //         autoplayHoverPause: true,
        //         paginationSpeed: 400,
        //         navigation: true,
        //         pagination: false,
        //         nav: true,
        //         navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
        //         dots: false
        //       });
    });


});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////