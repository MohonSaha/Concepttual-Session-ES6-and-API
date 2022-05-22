
const main = document.getElementById("main");
const searchButton = () => {
    const input = document.getElementById("input-value");
    const error = document.getElementById("error");

    const inputValue = parseInt(input.value);
    if(isNaN(inputValue) || inputValue == ""){
        // alert("please enter a number");
        error.innerText="please give a number";
        input.value = "";
        main.innerHTML = "";
    }
    else if(inputValue > 52){
        error.innerText= "Please give a number Under 53"
        main.innerHTML ="";
    }
    else if(inputValue <= 0){
        error.innerText= "please give a positive number"
        input.value="";
        main.innerHTML ="";
    }
    else{
        main.innerHTML="";
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
        .then(res => res.json())
        .then(data => cardsDisplay(data.cards))
        input.value="";
        error.innerHTML ="";
    }
}

const cardsDisplay = (cards) => {
    // cards = cards.cards;
    // console.log(cards);
    for (const card of cards){
        console.log(card.image);
        const div = document.createElement("div");
        div.classList.add("col-lg-4");
        div.classList.add("col-md-6");
        div.classList.add("mb-4");
        div.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="${card.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${card.suit}</h5>
                    <p class="card-text">${card.code}</p>
                    <button onclick="cardDetails('${card.code}')" href="#" class="btn btn-primary">See details</button>
                    </div>
                </div>
        `
    main.appendChild(div);
    }
}


const cardDetails = (mohon) => {
    console.log(mohon);
}