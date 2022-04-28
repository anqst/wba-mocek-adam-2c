// random + bg

const clickMeButton = document.querySelector("button#random-color");

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


// pole

const messages = ["ok", "idk", "nice"];

messages.forEach(function (element, index) {
    console.log(`${element} at index ${index}`);
})

// show/hide element

const showButton = document.querySelector("button#show-div");
const divToShow = document.querySelector("div#hidden-div");
divToShow.style.display = "none";

showButton.addEventListener("click", function(){

    (divToShow.style.display) == "none" ? divToShow.style.display = "block" : divToShow.style.display = "none";
})