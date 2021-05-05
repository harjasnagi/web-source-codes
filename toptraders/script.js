function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// progress bar starts
function totalPageHeight() {
    // height we see
    const h1 = window.innerHeight;
    // total height
    const h2 = document.documentElement.scrollHeight;
    return h2-h1;
}
function scrollPercent() {
    // distance from top to the window we see
    const scrollOffset = window.pageYOffset;
    const ratio = scrollOffset/totalPageHeight();
    return Math.floor(ratio * 100);
}
function onScroll() {
    const percent = scrollPercent();
    const bar = document.querySelector(".progress-bar");

    // bar.style.width = `${percent}%`;
    bar.style.height = `${percent}%`;
}
window.addEventListener("scroll", onScroll);
// progress bar ends

// function callme() {
//     let check = document.querySelector(".go-top");
//     if(document.body.scrollTop === 0) {
//         check.style.display = 'none';
//         document.getElementsByClassName(".go-top").style.display = "none";
//     }
//     else{
//         check.style.display = 'block';
//     }
// }