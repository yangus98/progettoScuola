const divContainer = document.querySelector("#tendina-menù");

let isClicked = true;

let showOrHide = function(){
    if (isClicked){
    divContainer.style.visibility = "visible";
    isClicked = false;
    } else {
    divContainer.style.visibility = "hidden";
    isClicked = true;
    }
}































