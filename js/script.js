resizeDivs();
window.addEventListener('resize', resizeDivs);

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var height = 0;
    var x = 0;

    if(scrollTop === 0) {
        $('.nav-background').css({"background-color": "rgba(248, 248, 248, 0.0)"})
    } else {
        $('.nav-background').css({
            "background-color": function() {
                height = 75;
                x = ((1 - (height - scrollTop) / height) * 0.08) + 0.1; 
                return "rgba(248, 248, 248, " + x + ")";
            }
        });
    }
});


function resizeDivs() {
    var innerWidth = window.innerWidth;
    var styleSheet = document.styleSheets[3];
    styleSheet.cssRules[9].style.height = innerWidth / 1.777777777777778;
    styleSheet.cssRules[7].style.height = innerWidth / 1.777777777777778;
    styleSheet.cssRules[10].style.height = innerWidth / 1.777777777777778;
}