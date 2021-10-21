alert("- Mobile: 375px x 540px \n - Desktop: 1440px x 800px");

var show = true;
var showControl = () => {
    var control = document.querySelector(".control");
    var bar = document.querySelector(".menu-mobile > i");
    bar.style.color = show ? "hsl(168, 34%, 41%)" : "hsl(0, 0%, 100%)";
    control.style.display = show ? "flex" : "none";
    show = !show;
};
