const cards = [
  { id: "1",
    imageUrl: "",
    name: "Liza",
    house: "Ravenclaw", 
    color: "blue",
  },
];




const hideCard = () => {
  const card = document.getElementById("card");
  card.style.display = "none";
}

const startApp = document.querySelector(".startButton");
startApp.addEventListener("click", hideCard);
// const renderHomeCard = () => {
//   const cardApp = document.querySelector("#card");
//   let domstring = "";
//   domstring += `
//   <div class="card" style="width: 30rem; height: 30rem;">
//   <img src="../images/houses.jpg" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Welcome to Sorting Hat</h5>
//     <which class="card-text">Which house will find you?</p>
//     <button class="startButton btn btn-primary">Enter</button>
//   </div>
// </div>
//   `
//   cardApp.innerHTML = domstring;
// }



//   renderEvents = () => {
//     for (card of cards) {
//     let eventstring = "";
//     eventstring += `<div class="card2" style="width: 19rem;">
//      <img src=${card.imageUrl} class="card-img-top" alt="${card.id}">
//     <div class="caerd-headr">${card.name}</div>
//     <div class="card-body">
//     <p class="card-text">${pet.specialSkill}</p>
//     <button type="button" id="delete--${card.id}" class="delete-button btn btn-danger">Delete</button>
//     </div>
//     // <div class=${pet.type} "card-footer" >${pet.type}</div>
//     </div>`

//     // <button type="button" class="btn btn-danger" id="delete--${pets.id}>Delete</button>
//   };
//   house.innerHTML = eventstring;

//   };



// const startApp = document.getElementById(".startButton");
// startApp.addEventListener("click", hideCard);
