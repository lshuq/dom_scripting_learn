/**
 * Created by shu qu on 2017/5/14.
 */

function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}

function prepareGallery() {
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("Imagegallery")) return false;
    var gallery = document.getElementById("Imagegallery");
    var links = gallery.getElementsByTagName("a");
    for( var i = 0; i < links.length; i++){
        links[i].onclick = function () {
            return !showPic(this);
        }
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func;
    }else{
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);