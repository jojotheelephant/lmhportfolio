export const NavBarScroll = () => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("nav").style.top = "0";
        } else {
            document.getElementById("nav").style.top = "-70px";
        }
        prevScrollpos = currentScrollPos;
    };
};