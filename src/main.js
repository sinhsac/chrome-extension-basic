var XXM = {
    loadJS(url, implementationCode, location) {
        if (location == undefined || location == null) {
            return
        }
        let scriptTag = document.createElement('script');
        scriptTag.src = chrome.runtime.getURL(url)
        scriptTag.onload = implementationCode
        scriptTag.onreadystatechange = implementationCode
        location.appendChild(scriptTag)
    },
    //loadMore() {},
    loadStyle(url, implementationCode, location) {
        let linkTag = document.createElement('link')
        linkTag.rel = 'stylesheet'
        linkTag.type = 'text/css'
        linkTag.href = chrome.runtime.getURL(url)
        linkTag.media = 'all'
        linkTag.onload = implementationCode
        linkTag.onreadystatechange = implementationCode
        location.appendChild(linkTag)
    }
}

function notInIframe () {
    try {
        return window.self === window.top;
    } catch (e) {}
    return false;
}

XXM.loadMore = function () {
    console.log("load more js bellow ...")
    /// XXM.loadJS("src/your-code.js", () => console.log("done"), document.body)
}

XXM.loadAllLibs = function () {
    XXM.loadStyle('css/main.css', function () {
        console.log("load style done");
    }, document.head);
    XXM.loadJS("src/common.js", () => {
        console.log("load common.js done");
        XXM.loadJS("src/lib.js", () => {
            console.log("load lib.js done");
            XXM.loadMore();
        }, document.body);
    }, document.body);
}

document.addEventListener('DOMContentLoaded', function(event, aa) {
    if (notInIframe()) {
        XXM.loadAllLibs()
    }
})