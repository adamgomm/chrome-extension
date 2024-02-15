//popup.js

const color = "#ff8346"; //red




document.getElementById("colorBtn").addEventListener("click", function(){
    
});

function changeBackground(color) {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: changeBackgroundColor,
            args: [color]
        });
    });
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}
