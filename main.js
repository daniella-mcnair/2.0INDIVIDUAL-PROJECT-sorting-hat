const cards = [
  { id: "1",
    imageUrl: "",
    name: "Liza",
    house: "Ravenclaw", 
    color: "blue",
  },
  { id: "2",
    imageUrl: "",
    name: "Edward",
    house: "Ravenclaw", 
    color: "blue",
  },
  { id: "3",
    imageUrl: "",
    name: "Alice",
    house: "Ravenclaw", 
    color: "blue",
  },
];


const formApp = document.querySelector("#app");

renderForm = () => {
  let domstring = "";
  domstring += 
  `<div id = "app">
    <div class="card">
      <div class="card-body">

      <form>
      <div class="mb-3 card3">
      <label for="exampleInputStudent" class="form-label">Enter Student Name</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your house with anyone else.</div>
      </div>
    <div class="mb-3 form-check">
    </div>
    <button type="submit" class="btn btn-primary">Enroll</button>
    </form>



    </div>
    
    <div id = "students">
    <div id ="enrolled" class = "card2">
    </div>  
    <div id ="expelled" class = "card2">
    </div>  
  </div>

    </div>`
    formApp.innerHTML = domstring

const studentContainer = document.querySelector("#enrolled");

const renderStudents = () => {
  let cardstring = "";
  cards.forEach((card) => {
    cardstring +=
    `<div class="card" style="width: 150px;">
      <div class="card-header">${card.name}</div>
      <img src=${card.imageUrl} class="card-img-top" alt="${card.id}">
      <div class="card-body">
       <button type="button" id="delete--${card.id}" class="delete-button btn btn-danger">Delete</button>
      </div>
      <div class=${card.house} "card-footer" >${card.house}</div>
      </div>`;
  });

  studentContainer.innerHTML = cardstring;


};


    
renderStudents();


const studentContainer2 = document.querySelector("#expelled");

const renderExpelled = () => {
  let expelstring = "";
  cards.forEach((card) => {
    expelstring +=
    `<div class="card" style="width: 150px;">
      <div class="card-header">${card.name}</div>
      <img src=${card.imageUrl} class="card-img-top" alt="${card.id}">
      </div>`;
  });

  studentContainer2.innerHTML = expelstring;


};


    
renderExpelled();


  
}


const hideCard = () => {
  const card = document.getElementById("card");
  card.style.display = "none";
  renderForm();

};






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
