const clickMeButton = document.querySelector("button.clickable");

clickMeButton.addEventListener("click", ()=> {

    if (GetRandom(0, 10) < 6){
        const randColor = GenerateRandomColoUr();
        console.log(randColor);
        clickMeButton.style.backgroundColor = randColor;
    } else {

        console.log("ne nechce se mi");
    }
});

function GenerateRandomColoUr(){

    const randColorStringSource = "0123456789ABCDEF";
    let colour = "#";

    for (let i = 0; i <=6; i++){
        colour = `${colour}${randColorStringSource.substr(GetRandom(0, randColorStringSource.length), 1)}`;
    }

    return colour;
}

function GetRandom(min, max){
    return (Math.random() * max + min + 1);
}