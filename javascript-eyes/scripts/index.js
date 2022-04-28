const clickMeButton = document.querySelector("button.clickable");

clickMeButton.addEventListener("click", ()=> {

    const randColor = GenerateRandomColoUr();
    console.log(randColor);
    clickMeButton.style.backgroundColor = randColor;
});

function GenerateRandomColoUr(){

    const randColorStringSource = "0123456789ABCDEF";
    let colour = "#";

    for (let i = 0; i <=6; i++){
        colour = `${colour}${randColorStringSource.substr(Math.random(0, randColorStringSource.length)*randColorStringSource.length+1, 1)}`;
    }

    return colour;
}