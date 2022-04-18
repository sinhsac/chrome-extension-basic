var XXM = {
    loadJS(url, implementationCode, location){
        let scriptTag = document.createElement('script');
        scriptTag.src = chrome.runtime.getURL(url);
        scriptTag.onload = implementationCode;
        scriptTag.onreadystatechange = implementationCode;
        location.appendChild(scriptTag);
    },
    loadMore() {},
    loadStyle(url, implementationCode, location){
        let linkTag = document.createElement('link');
        linkTag.rel  = 'stylesheet';
        linkTag.type = 'text/css';
        linkTag.href = chrome.runtime.getURL(url);
        linkTag.media = 'all';
        linkTag.onload = implementationCode;
        linkTag.onreadystatechange = implementationCode;
        location.appendChild(linkTag);
    }
}

XXM.loadMore = function () {
    console.log("load more js")
    XXM.loadJS("src/your-code.js", () => console.log("done"), document.body)
}

document.addEventListener('DOMContentLoaded', function() {
    XXM.loadStyle('css/main.css', function () {
        console.log("load style done");
    }, document.head);
    XXM.loadJS("src/lib.js", () => {
        XXM.loadMore();
    }, document.body);
})


