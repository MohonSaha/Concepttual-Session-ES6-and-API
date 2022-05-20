const searchButton = () => {
    const input = document.getElementById("input-value");
    const error = document.getElementById("error");

    const inputValue = parseInt(input.value);
    if(isNaN(inputValue) || inputValue == ""){
        // alert("please enter a number");
        error.innerText="please give a number";
        input.value = "";
    }
    else if(inputValue > 52){
        error.innerText= "Please give a number Under 53"
    }
    else if(inputValue <= 0){
        error.innerText= "please give a positive number"
        input.value="";
    }
    else{
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
        .then(res => res.json())
        .then(data => cardsDisplay(data))
        input.value="";
    }
}

const cardsDisplay = (cards) => {
    console.log(cards);
}