$( document ).ready(function() {
    $('#menu').slicknav();
    $('.tooltip').tooltipster({
      animation: 'grow',
      offsetY: -25,
      touchDevices: false,
      trigger: 'hover'
    });
    $("[id=shownotes  ]").hide();

    function shownotes() {
      $('.notestoggle').click(function(event) {
        event.preventDefault();
        $(this).parent().parent().parent().find('#shownotes').toggle("slow");
        $(this).find('.arrow').toggleClass("arrowdown arrowup");
      });
    };

    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 75
            }, 1000);
            return false;
          }
        }
      });
    });

    //----------------------------
    //Google Analytics
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-59570515-1', 'auto');
    ga('send', 'pageview');
    //----------------------------

    shownotes();

});

