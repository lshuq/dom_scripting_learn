/**
 * Created by shu qu on 2017/5/16.
 */

function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement)
    }else {
        parent.insertBefore(newElement,targetElement.nextSibling);
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