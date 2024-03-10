/*
    Jon Beltzhoover
    Andrew Johnson
    Midterm Project
    Team 02
*/
fetch("./generator.json")
.then(response => response.json())
.then(myCats => loadCats(myCats));
function loadCats(myCats){
    var mainContainer = document.getElementById("cats");
    mainContainer.innerHTML = "";
    let count = Math.floor(Math.random()* (myCats.cats.length -1) + 1);
    for(var i = 0; i < myCats.cats.length; i++){
        if(myCats.cats[i].catId == count){
            let div = document.createElement("div");
            div.innerHTML = `<br>
            <img src="${myCats.cats[i].url}" alt = cat ID ="${myCats.cats[i].catId}"> `;
            console.log(myCats.cats[i].catId);
            mainContainer.appendChild(div);
        }
    }
}