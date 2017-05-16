/**
 * Created by shu qu on 2017/5/14.
 */

function showPic(whichpic) {
    if(!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if(placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);
    if(document.getElementById("description")){
        var text = whichpic.getAttribute("title");
        var description = document.getElementById("description");
        if(description.firstChild.nodeType == 3){
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

function prepareGallery() {
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for( var i = 0; i < links.length; i++){
        links[i].onclick = function () {
            return showPic(this) ? false : true;
        }
    }
}

function preparePlaceholder() {
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","../img/nature.jpg");
    placeholder.setAttribute("alt","my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var desctext = document.createTextNode("Choose an image");
    description.appendChild(desctext);
    // document.body.appendChild(placeholder);
    // document.body.appendChild(description);
    var gallery = document.getElementById("imagegallery");
    gallery.parentNode.insertBefore(placeholder,gallery);
    gallery.parentNode.insertBefore(description,gallery);
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
addLoadEvent(preparePlaceholder);