    var all = $(".print, .branding,.photography, .design, .mockup")
    
    $("#all").click(function () {
        all.fadeIn(600);
    });  

    $("#branding").click(function () {
        all.hide();
        $(".branding").fadeIn(600);
    });  

    $("#print").click(function () {
        all.hide();
        $(".print").fadeIn(600);
    });  

    $("#photography").click(function () {
        all.hide();
        $(".photography").fadeIn(600);
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
    
    $("#portMenu").hide();
    $("#showPortMenu").click(function () {
        $("#portMenu").slideToggle(600, "swing");
        setColor("#showPortMenu");
    });