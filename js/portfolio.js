var isFirefox = typeof InstallTrigger !== 'undefined';
$(document).ready(function () {
    $('body').scrollspy({ target: '#navbar' });

    $('.thumb').click(function () {
        $("#view").attr("src", $(this).attr("src"));
    });

    $('a.internallink').click(function () {
        var linked = $($(this).attr('href'));

        var to = linked.offset().top + $(window).scrollTop();
        if (isFirefox)
            to = linked.offset().top + 15;
        $('html, body').animate({ scrollTop: to }, 2000);
    });

    $("#icon").click(function () {
        $(this).toggleClass("snurr");
    });
    
    $("#print").click(function () {
        window.print();
    });
});

