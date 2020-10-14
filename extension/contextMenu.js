// adapted from the chrome extension sample code

function getClickHandler() {
  return function(info, tab) {
    var url = 'https://ij.imjoy.io/?open=' + info.srcUrl;
    chrome.tabs.create({ url: url });
  };
};

chrome.contextMenus.create({
    "title" : "(try to) Open in ImageJ.JS",
    "type" : "normal",
    "contexts" : ["image"],
    "onclick" : getClickHandler()
});