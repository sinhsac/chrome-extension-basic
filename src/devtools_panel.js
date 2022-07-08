import insta from './devtools/instagram.js';
import fb from './devtools/facebook.js';
import flickr from './devtools/flickr.js'


chrome.devtools.network.onRequestFinished.addListener(data => {
    let url = data.request.url;
    if (/instagram\.com\/graphql\/query/.test(url)) {
        insta.processData(url, data);
        return;
    }
    if (/facebook\.com\/api\/graphql/.test(url)) {
        fb.processData(url, data);
        return;
    }
    if (/api\.flickr\.com\/services\/rest/.test(url)) {
        flickr.processData(url, data);
        return;
    }
});