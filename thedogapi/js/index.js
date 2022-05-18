fetch("https://api.thedogapi.com/v1/breeds")
.then(Response => Response.json())
.then(data => console.log(data))