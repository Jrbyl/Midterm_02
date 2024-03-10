/*
    Jon Beltzhoover
    Andrew Johnson
    Midterm Project
    Team 02
*/
function getInputValue() {
    fetch("./generator.json")
    .then(response => response.json())
    .then(myCats => loadCats(myCats));

    let catColor = document.forms["my_form"]["catColor"];
    let inputCatColor = catColor.value;
    console.log(inputCatColor);
    
    function loadCats(myCats){
        var mainContainer = document.getElementById("cats");
        mainContainer.innerHTML = "";
        while(1){
            var count = Math.floor(Math.random()* (myCats.cats.length -1) + 1);
            console.log(count);
            if(cat == 1){
                break;
            }
            let count = Math.floor(Math.random()* (myCats.cats.length -1) + 1);
            for(var i = 0; i < myCats.cats.length; i++){
                if(myCats.cats[i].catId === count && myCats.cats[i].tags[0] === inputCatColor){
                    let div = document.createElement("div");
                    div.innerHTML = `<br>
                    <img src="${myCats.cats[i].url}" alt = cat ID ="${myCats.cats[i].catId}"> `;
                    console.log(myCats.cats[i].catId);
                    mainContainer.appendChild(div);
                    cat = 1;
                    break;
                }
            }
        }
    }
}