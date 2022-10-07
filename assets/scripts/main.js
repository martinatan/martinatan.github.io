/**********
 * September 2022
 * Javascript for common components across pages
 * ********/

// change header styling upon scroll
window.onscroll = function() {scrollFunction()};

const pageHeader = document.querySelector(".page-header");
var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

//const backToTop = document.querySelector(".back-to-top");

function scrollFunction() {
    if ((document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) && (vw > 900))  {
    pageHeader.style.boxShadow = "0px 3px 3px rgba(73, 19, 39, 0.1)";
    } else {
    pageHeader.style.boxShadow = "0px 3px 3px rgba(73, 19, 39, 0)";
    }
    vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0); //recalculate

    //draft code for a scroll to top button (nice to have)
    // if ((document.body.scrollTop > 900 || document.documentElement.scrollTop > 900))  {
    //     backToTop.style.display = block;
    // } else {
    //     backToTop.style.display = none;
    // }
} 