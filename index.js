try {
    var val = Number(window.prompt("How many maximum digits will the number have?"));
}
catch (error) {
    var val = 1;
}
val = getVal();
setInterval(setTime, 10);
function setTime() {
    document.getElementById("numb").innerHTML = getNum();
}

function getNum() {
    // console.log(val);
    let shift = Math.random() * 2;
    return Math.floor(Math.random() * val);
}
function getVal() {
    val < 1 ? 1 : val;
    start = 10;
    for (let i = 1; i < val; i++) {
        start *= 10;
    }
    return start;
}
