
function random_language() {
    var random = Math.floor(Math.random() * 3);
    var languageList = ["english", "spanish", "greek", "french"]
    return languageList[random];
};

function showAlert() {
    alert("test");
} 


function changeHeadingBg(color) {
    document.getElementById("crumbl_header").style.background = color;
}

function changeHeadingWd(text) {
    document.getElementById("crumbl_header").textContent = text;
}