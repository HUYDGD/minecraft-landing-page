var headerNav = document.getElementsByClassName("header--nav")[0];  
var mobileMenu = document.getElementsByClassName("header--mobilebtn")[0];
var headerHeight = header.clientHeight;
mobileMenu.onclick = function() {
    var isClosed = headerNav.clientHeight === headerHeight;
    if (isClosed) {
        headerNav.style.height = "auto";
    } else {
        headerNav.style.height = null;
    }
}
var mobileItems = document.querySelectorAll('.header--nav li a[href*="#"]');
for (var i = 0; i < mobileItems.length; i++) {
    var mobileItem = mobileItems[i];
    mobileItem.onclick = function() {
        headerNav.style.height = null;
    }
}