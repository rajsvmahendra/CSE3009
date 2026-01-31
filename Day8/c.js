// DOM PART
document.getElementById("btnId").addEventListener("click", function () {
    let el = document.getElementsByClassName("box1");
    el[0].style.color = "blue";
});

document.getElementById("btnClass").addEventListener("click", function () {
    let els = document.getElementsByClassName("text");
    for (let i = 0; i < els.length; i++) {
        els[0].style.background = "yellow"
    }
});

document.getElementById("btnTag").addEventListener("click", function () {
    let tags = document.getElementsByTagName("div");
    tags[0].style.border = "3px solid green";
});

document.getElementById("btnQuery").addEventListener("click", function () {
    document.querySelector(".box2").style.background = "lightblue";
});

document.getElementById("btnQueryAll").addEventListener("click", function () {
    let all = document.querySelectorAll(".text, .box1, .box2");
    all.forEach(el => el.style.fontStyle = "italic");
});


// BOM PART

document.getElementById("btnAlert").addEventListener("click", function () {
    alert("This is BOM Alert");
});

document.getElementById("btnURL").addEventListener("click", function () {
    alert(location.href);
});

document.getElementById("btnReload").addEventListener("click", function () {
    location.reload();
});

document.getElementById("btnRedirect").addEventListener("click", function () {
    location.href = "https://www.google.com";
});

document.getElementById("btnHistory").addEventListener("click", function () {
    history.back();
});

document.getElementById("btnScreen").addEventListener("click", function () {
    alert("Width: " + screen.width + " Height: " + screen.height);
});

document.getElementById("btnInfo").addEventListener("click", function () {
    alert(navigator.userAgent);
});
