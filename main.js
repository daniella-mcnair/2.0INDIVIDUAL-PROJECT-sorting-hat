const cards = [
  { name: "Liza",
    house: "Ravenclaw",
    color: "blue",
  },
];


const house = document.querySelector("#firstYear");
const expelled = document.querySelector("#voldyArmy");

const renderHomeCard = () => {
  const cardApp = document.querySelector("#card");
  let domstring = "";
  domstring += `
  <div class="card" style="width: 30rem; height: 30rem;">
  <img src="../images/houses.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Welcome to Sorting Hat</h5>
    <which class="card-text">Which house will you find you?</p>
    <button id = "startButton" class="btn btn-primary">Enter</button>
  </div>
</div>
  `
  cardApp.innerHTML = domstring;
}



// const hideCard = () =>{
//   document.querySelector("#card").style.display = "none";
//   };


// const startApp = document.querySelector("#startButton");
// startApp.addEventListener("click", hideCard)

renderHomeCard();
