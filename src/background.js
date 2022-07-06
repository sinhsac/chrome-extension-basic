
chrome.action.onClicked.addListener(tab => {
    console.log(tab)
});

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
}, { url: [ { urlMatches: 'https://*/*' } ] })

chrome.webNavigation.onCompleted.addListener((details) => {
    console.info(details.url, details);
}, { url: [ { urlMatches: 'https://*/*' } ] });