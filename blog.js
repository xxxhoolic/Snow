    var all = $(".nature, .cities, .branding, .design")
    
    $("#all").click(function () {
        all.fadeIn(600);
    });  

    $("#nature").click(function () {
        all.hide();
        $(".nature").fadeIn(600);
    });  

    $("#cities").click(function () {
        all.hide();
        $(".cities").fadeIn(600);
    });  

    $("#branding").click(function () {
        all.hide();
        $(".branding").fadeIn(600);
    });  

    $("#design").click(function () {
        all.hide();
        $(".design").fadeIn(600);
    });  

    $("#mockup").click(function () {
        all.hide();
        $(".mockup").fadeIn(600);
    });  

//button effect
    var count = 1;
    function setColor(btn) {
        var property = $(btn);
        if (count == 0) {
            property.css("background-image", "url(images/menu-square.svg)");
            count = 1;        
        }
        else {
            property.css("background-image", "url(images/menu-square-active.svg)");
            count = 0;
        }
    }
    
    $("#blogMenu").hide();
    $("#showBlogMenu").click(function () {
        $("#blogMenu").slideToggle(600, "swing");
        setColor("#showBlogMenu");
    });

    $(".blog").on('click', function(){
     window.location = "blog-single.html";    
});