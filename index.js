function rdm(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function GenerateColors(num) {
    let arr = [];
    for(let i = 0; i < num; i++){
        arr[i] = "rgb(" + rdm(0, 255) + ", " + rdm(0, 255) + ", " + rdm(0, 255) +  ")";
    }
    return arr;
}

function colorAll(color) {
    for(let i = 0; i < colors.length; i++){
        sqrs[i].style.backgroundColor = color;
    }
}

function work(nos){
    colors = GenerateColors(nos);
    idx = rdm(0, colors.length-1);
    answerColor = colors[idx];

    for(let i = 0; i < colors.length; i++){
        sqrs[i].style.backgroundColor = colors[i];
        if(pageFirstLoaded) {
            // console.log("Check PageLoaded");
            sqrs[i].addEventListener("click", function () {
                if (this.style.backgroundColor === answerColor) {
                    h1.style.backgroundColor = answerColor;
                    message.textContent = "Correct";
                    resetBtn.textContent = "PlayAgain?";
                    colorAll(answerColor);
                } else {
                    message.textContent = "Try Again";
                    this.style.backgroundColor = "#232323";
                }
            });
        }
    }

    displayColor.textContent = answerColor;
}
let pageFirstLoaded = true;
let answerColor;
let idx;
let h1 = document.querySelector("h1");
let displayColor = document.querySelector("h1 span");
let resetBtn = document.querySelector("#reset");
let message = document.querySelector("#message");
let sqrs = document.querySelectorAll('.square');
let easyGame = document.querySelector("#easy");
easyGame.addEventListener("click", function () {
    easyGame.classList.add("selected");
    hardGame.classList.remove("selected");
    numberOfSquare = 3;
    message.textContent = "";
    resetBtn.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    pageFirstLoaded = true;
    work(numberOfSquare);
    pageFirstLoaded = false;
    for(let i = 0; i < sqrs.length; i++){
        if(!colors[i]){
            sqrs[i].style.display = "none";
        }
    }
});
let hardGame = document.querySelector("#hard");
hardGame.addEventListener("click", function () {
    easyGame.classList.remove("selected");
    hardGame.classList.add("selected");
    numberOfSquare = 6;
    message.textContent = "";
    resetBtn.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    pageFirstLoaded = true;
    work(numberOfSquare);
    pageFirstLoaded = false;
    for(let i = 0; i < sqrs.length; i++){
        if(sqrs[i].style.display === "none"){
            sqrs[i].style.display = "block";
        }
    }
});
let numberOfSquare = 6;
let colors;
work(numberOfSquare);
pageFirstLoaded = false;
resetBtn.addEventListener("click", function () {
    this.textContent = "New Color";
    message.textContent = "";
    h1.style.backgroundColor = "steelblue";
    work(numberOfSquare);
});

