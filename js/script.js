resizeDivs();
window.addEventListener('resize', resizeDivs);
//window.addEventListener('scroll', headerScroll);

// function headerScroll() {
//     debugger;
//     var scrollTop = $(window).scrollTop();
//     var height = 75;
//     var styleSheet = document.styleSheets[3];
//     var x = ((1 - (height - scrollTop) / height) * 0.8) + 0.3;
//     styleSheet.cssRules[3].style.backgroundColor = 'rgba (248, 248, 248, ' + x + ')';
// }

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

    $('.nav-background').css({
        backgroundColor: function() {
            var height = 75;
            var x = ((1 - (height - scrollTop) / height) * 0.8) + 0.3;
            return 'rgba (248, 248, 248, ' + x + ')';
        }
    });
});


function resizeDivs() {
    var innerWidth = window.innerWidth;
    var styleSheet = document.styleSheets[3];
    styleSheet.cssRules[9].style.height = innerWidth / 1.777777777777778;
    styleSheet.cssRules[7].style.height = innerWidth / 1.777777777777778;
    styleSheet.cssRules[10].style.height = innerWidth / 1.777777777777778;
    // var carousel = document.getElementsByClassName(carousel);
    // var item = document.getElementsByClassName(item);
    // for(var i = 0; i < carousel.length; i++) {
    //     carousel[i].style.height = innerHeight;
    // }
    // for(var j = 0; j < item.length; j++) {
    //     item[j].style.height = innerHeight;
    // }
}