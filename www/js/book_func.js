//function for book

//swiper var
var swiper = null;

//index function
//goto page use pageNum
function indexFunction (pageNum) {
    'use strict';
    swiper.slideTo(parseInt(pageNum) - 1);
}

//goHome function
function goHomeFunction () {
    'use strict';
    swiper.slideTo(0);
}

//popup index page (popup Div) function
function popUpIndexDiv () {
    if($("#indexDiv").css('z-index') > -1) {
        $("#indexDiv").css('zIndex', '-1');
    } else {
        $("#indexDiv").css('zIndex', '10');
    }
}

//index function
//go to page use pageNum
function popUpIndexFunction (pageNum) {
    //disapear popup index page
    $("#indexDiv").css('zIndex', '-1');
    //silde to pageNum -1
    //pageNum-1 because page Array start with 0
    swiper.slideTo(parseInt(pageNum) - 1);
}
