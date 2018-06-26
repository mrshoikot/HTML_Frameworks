/* Custom Js (Jquery) */


jQuery(function ($) {
    'use strict';


    $(window).on('load', function () {


        // Image popup setup...
        $('.popup').magnificPopup({
            delegate: 'a',
            type: 'image'

        });


        // Navigation bar(Mobile) setup...
        $('#nav-toggle').on('change', customEvent);
        $('#navbar-phone .nav-list a').on('click', customEvent);

        function customEvent(e) {
            if ($(this).is(':checked')) {
                $('.navbar-brand img').attr('src', 'assets/images/svg/logo-white.svg');
            } else {
                $('.navbar-brand img').attr('src', 'assets/images/svg/logo.svg');
            }
        }


        // Social icon setup...
        $(".icons").jsSocials({
            showLabel: false,
            showCount: false,
            shareIn: "popup",
            shares: [{
                share: "facebook",
                logo: "assets/images/svg/facebook-big.svg"
				}, {
                share: "twitter",
                logo: "assets/images/svg/twitter-big.svg"
				}, {
                share: "email",
                logo: "assets/images/svg/instagram-big.svg"
				}, {
                share: "linkedin",
                logo: "assets/images/svg/snapchat-big.svg"
				}]
        });


        // Change background color of nav item when it's active...
        $('#navbar-desktop .navbar-nav .item a').click(function () {
            $('#navbar-desktop .navbar-nav .item a').parent().removeClass('active');
            $(this).parent().addClass('active');
        })


        // Navigation bar close when link clicked...
        $('#navbar-phone .nav-list a').click(function () {
            $('#navbar-phone #nav-toggle').prop('checked', false);
        })


    });




});
