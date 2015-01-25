function sc_online_t(id, label) {
    var info;
    var d = document;

    if (encodeURIComponent) {
        info = '&ua=' + encodeURIComponent(navigator.userAgent);
        info = info + '&ref=' + encodeURIComponent(document.referrer);
        info = info + '&url=' + encodeURIComponent(window.location);
    } else {
        info = '&ua=' + escape(navigator.userAgent);
        info = info + '&ref=' + escape(document.referrer);
        info = info + '&url=' + escape(window.location);

    }

    info = info + '&sw=' + screen.width;
    info = info + '&sh=' + screen.height;
    info = info + '&rand=' + Math.round(100 * Math.random());
    info = info + '&label=' + label;

    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = "http://www.supercounters.com/fc.php?id=" + id + "&w=1&v=1" + info; (d.getElementsByTagName("head")[0] || d.getElementsByTagName("body")[0]).appendChild(ga);
 
}

function sc_onlinetext(id, out) {
    var a = document.createElement("a");
    a.setAttribute('float',"left");
    
	a.innerHTML = out;

    ct_insert(a, "supercounters.com/online_t.js");
}

function ct_insert(c, d) {
    var a = document.getElementsByTagName("script");
    for (var b = 0; b < a.length; b++) {
        if (a[b].src.indexOf(d) > 0) {
            a[b].parentNode.insertBefore(c, a[b].nextSibling)
        }
    }
}
 