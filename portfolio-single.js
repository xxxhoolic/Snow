$(document).ready(function() {
    $(window).scroll(function() {
        if ($('video:in-viewport(100)')) {
            $("video")[0].play();
        } else {
            $("video")[0].play();
        }
    });
});
