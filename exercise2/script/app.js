/* Write your code here! */
(function() {
    
    $(".responsive-image").each(function() {
        var imageCaption = $(this).attr("alt");
        $(this).parent().append($('<p>'+imageCaption+'</p>'));
    });
    
    $("img").on('click', function(){
        var imageSource = $(this).attr("src");
        var imageCaption = $(this).attr("alt");
        $(".overlay img").attr('src', imageSource);
        $(".overlay p").html(imageCaption);
        $(".overlay").removeClass('hide');
    })
    
    $(".overlay").on('click', function(){
        $(".overlay").addClass('hide');
    });

})();