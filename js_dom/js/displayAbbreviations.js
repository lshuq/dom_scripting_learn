/**
 * Created by shu qu on 2017/5/17.
 */

function displayAbbreviations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    //取得所有缩略词
    var abbreviatioins = document.getElementsByTagName("abbr");
    if (abbreviatioins.length < 1) return false;
    var defs = new Array();
    var definition;
    //先定义len为缩略词个数，不能在for()里面直接使用element.length。
    var len = abbreviatioins.length;
    //遍历所有缩略词
    for (var i = 0; i < len; i++) {
        var current_abbr = abbreviatioins[i];
        if (current_abbr.childNodes.length < 1) continue;
        definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }
    //创建定义列表
    var dlist = document.createElement("dl");
    //loop the definitions
    for (key in defs) {
        definition = defs[key];
        //创建定义标题
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        //创建定义描述
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        //添加到列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if (dlist.childNodes.length < 1) return false;
    var header = document.createElement("h2");
    var hearer_text = document.createTextNode("Abbreviations");
    header.appendChild(hearer_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);

}

addLoadEvent(displayAbbreviations);