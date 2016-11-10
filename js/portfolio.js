$(document).ready(function(){
    $('body').scrollspy({target: '#navbar'});
    $('.thumb').click(function(){
        $("#view").attr("src", $(this).attr("src"));
    });

    $('a.internallink').click(function(){
        var linked = $($(this).attr('href'));
        var to = linked.offset().top + $(window).scrollTop();
        $('html, body').animate({scrollTop: to}, 2000);//'html, body'
    });
});

