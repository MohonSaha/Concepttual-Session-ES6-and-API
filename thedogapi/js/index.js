
const loadDog = () => {
    fetch("https://api.thedogapi.com/v1/breeds")
    .then(Response => Response.json())
    .then(data => displayDog(data))
}

const displayDog = (dogList) => {
    const main = document.getElementById("main");
    const first10Data = dogList.slice(0, 10);
    
    for(const dog of first10Data){
        const div = document.createElement("div");
        div.className = "col-lg-3 col-md-4 col-sm-6"
        div.innerHTML= `
            <h2>${dog.name} </h2>
            <p> ${dog.temperament}</p>
            <p> ${dog.weight.imperial}</p>
            <img width="250px" height="250px" src="${dog.image.url}">
        `;
    main.appendChild(div)
    }

}