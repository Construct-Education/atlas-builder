/*var templates = {
    homepage: "1kDh6QNn25c3vOt5Q1Hu16NWc2wyq8j_CH364rxC67FA",
    coverPage: "1Vu1T4IQSkcQyf-kFVBOwRElTp3r8XkXUr9MKfWypTJQ",
    courseOutline: "1pKgDFm4Rubw07UXZmpzTeFFhWsmYNVb-ZjFnQSBxksg",
    assignments: "1J-6c6CrvGM-WzT2mg46NxXYdnlkdOuhOxJ7eb3VVdkQ",
    module: "12c8-QRDNi6XJ5XjnZnZw09RMLuy05U5E5-UUCJfH4XU",
    page: "1ZUWwCMIlCwvtKEkfFulLVlC4CYmxUE-wMMTPhQGioyk",
    quiz: "1WZiRccFuk58ZSH97pqDi5VPaOROy74tjuwiyywzSFo0",
}
*/

//WHEN YOU CLICK A PLATFORM BUTTON IT OPENS THE SUB PAGE BY USING THE ARIA CONTROLS 

var appContainer = document.getElementById("app-container");
var homepage = document.getElementById("homepage");
var currentOpenPage;

//ON LOAD EXECUTE
(function () {
    makePlatformBtnsWork(appContainer);
}())



function makePlatformBtnsWork(appContainer) {

    var platformBtns = appContainer.querySelectorAll('.platform-btn');

    var n;

    for (n = 0; n < platformBtns.length; n++) {

        platformBtns[n].setAttribute('onclick', 'openPlatformMenuItems(this)');


    }
}

function openPlatformMenuItems(btn) {
    var platformPageToOpenId = btn.getAttribute('aria-controls');
    var platformPageContainer = appContainer.querySelector(`#${platformPageToOpenId}`);

    closePage(homepage);
    openPage(platformPageContainer);
}

function backToHomepage() {
    closePage(currentOpenPage);
    openPage(homepage);
}

function closePage(page) {
    page.setAttribute('aria-hidden', 'true');
}
function openPage(page) {
    page.setAttribute('aria-hidden', 'false');
    currentOpenPage = page;
    console.log(currentOpenPage);
}
