
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
        div.innerHTML= `
            <h2>${dog.name} </h2>
        `;
    main.appendChild(div)
    }

}