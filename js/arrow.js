/**
 * Created by Blue Butterfly on 19/05/2017.
 */
$(document).ready(function(){

    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('.ir-arriba').slideDown(300);
            // $('.ir-arriba').show();
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });

});