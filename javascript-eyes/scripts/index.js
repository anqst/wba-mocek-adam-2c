document.addEventListener("DOMContentLoaded", function(){

    const open = document.querySelector("#open");
    const arrow = document.querySelector("#arrow");
    const hidden = document.querySelector("#hidden");

    hidden.style.display = "none";

    open.addEventListener("click", function(){

        if(hidden.style.display == "none"){

        hidden.style.display = "flex";
        arrow.style.transform = "rotate(-45deg)";
        hidden.style.top = `${-hidden.offsetHeight + open.offsetHeight}px`;
        hidden.style.top = `${open.offsetHeight}px`;

        } else {

            hidden.style.top = `${-hidden.offsetHeight + open.offsetHeight}px`;
            let trans;
            hidden.addEventListener("transitionend", trans = function(){

                hidden.style.display = "none";
                arrow.style.transform = "rotate(45deg)";
                hidden.removeEventListener("transitionend", trans);
            });
        }
    });


    // key capture
    window.addEventListener("keydown", function(e){

        console.log(e.key);
    });
});