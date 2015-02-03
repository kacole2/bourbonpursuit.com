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

    shownotes();

});

