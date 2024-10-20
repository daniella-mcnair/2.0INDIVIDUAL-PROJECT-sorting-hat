const students = [
  { name: "Liza",
    house: "Ravenclaw"
  },
];


const house = document.querySelector("#firstYear");
const expelled = document.querySelector("#voldyArmy");

const renderHomeCard = () => {
  const cardApp = document.querySelector("#card");
  let domstring = "";
  domstring += `
  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Enter</a>
  </div>
</div>
  `
  cardApp.innerHTML = domstring;
}

renderHomeCard();
