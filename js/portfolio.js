// function thumbling(thumb){
//     document.getElementById("view").src = thumb;
    
// }

$(document).ready(function(){
    $('.thumb').click(function(){
        $("#view").hide();
    });

    $('a.internallink').click(function(){
        var linked = $($(this).attr('href'));
        var to = linked.offset().top + $(window).scrollTop();
        $(document.body).animate({scrollTop: to}, 2000);//'html, body'
    });
});

