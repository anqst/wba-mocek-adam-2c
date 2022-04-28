const clickMeButton = document.querySelector("button.clickable");

clickMeButton.addEventListener("click", ()=> {

    console.log("xd");
    clickMeButton.style.backgroundColor = GenerateRandomColoUr();
});

function GenerateRandomColoUr(){

    const randColorStringSource = "0123456789ABCDEF";
    let colour = "#";

    for (let i = 0; i <=6; i++){
        colour = `${colour}${randColorStringSource.substr(Math.random(0, randColorStringSource.length)*randColorStringSource.length+1, 1)}`;
    }

    return colour;
}