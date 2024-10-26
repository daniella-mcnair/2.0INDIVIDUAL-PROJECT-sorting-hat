const students = [
  { id: "1",
    imageUrl: "",
    name: "Liza",
    house: "Gryffindor", 
  },
  { id: "2",
    imageUrl: "",
    name: "Maxwell",
    house: "Ravenclaw", 
  },
  { id: "3",
    imageUrl: "",
    name: "Emily",
    house: "Slytherin", 
  },
  { id: "4",
    imageUrl: "",
    name: "Madaline",
    house: "Hufflepuff", 
  },

];

const xStudents = [
  { id: "1",
    imageUrl: "",
    name: "Jake",
    house: "Ravenclaw", 
  },
  { id: "2",
    imageUrl: "",
    name: "Belle",
    house: "Hufflepuff", 
  },
  { id: "3",
    imageUrl: "",
    name: "Belle",
    house: "Hufflepuff", 
  },
  { id: "4",
    imageUrl: "",
    name: "Belle",
    house: "Hufflepuff", 
  },
]

const houses = ["Gryffindor","Ravenclaw","Slytherin","Hufflepuff"];

assignHouse = () => {
  const randomIndex = Math.floor(Math.random() * houses.length);
  const newHouse = houses[randomIndex];
  return newHouse;
}


// const formApp = document.querySelector("#app");



const renderStudents = () => {
  const studentContainer = document.querySelector("#enrolled")
  let studentString = "";
  students.forEach((student) => {
    studentString +=
    `<div class="card5" style="width: 150px;">
      <div class="card-header">${student.house}</div>
       <div class="card-body">
      <div class="card-body">
       
      </div>
      <div class=${student.name} "card-footer" >${student.name}</div>
      <button type="button" id="delete--${student.id}" class="delete-button btn btn-danger">Delete</button>
      </div></div>`;
  });

  studentContainer.innerHTML = studentString;
};


//render exisitng expelled students

const studentContainer2 = document.querySelector("#expelled");

const renderExpelled = () => {
  let expelstring = "";
  xStudents.forEach((student) => {
    expelstring +=
    `<div class="card5" style="width: 150px;">
      <div class="card-header">${student.name}</div>
      </div>`;
  });

  studentContainer2.innerHTML = expelstring;


};



const hideCard = () => {
  const card = document.getElementById("card");
  card.style.display = "none";
  renderStudents();
  renderExpelled();

};

const form = document.querySelector("#studentForm");

const createStudent = (e) => {
  e.preventDefault();

  
  const newStudent = {
    id: students.length + 1,
    name: document.querySelector("#name").value,
    house: assignHouse(),
  }

  students.push(newStudent);
  renderStudents();
  form.reset();
}

form.addEventListener("submit", createStudent);



const startApp = document.querySelector(".startButton");
startApp.addEventListener("click", hideCard);

///filters

const showALL = document.querySelector(".allBTN");
const showGRF = document.querySelector(".grfBTN");
const showHUFF = document.querySelector(".huffBTN");
const showRAV = document.querySelector(".ravBTN");
const showSLY = document.querySelector(".slyBTN");

const allFilter = () =>  {
renderStudents();
};

const grfFilter = () =>  {
  let grfArray = [];
  students.forEach((student) => {
    if(students.house === "Griffyndor") {
      grfArray.push(student);
    }
    renderStudents(grfArray);
  });
  };


  const huffFilter = () =>  {
    let huffArray = [];
    students.forEach((student) => {
      if(students.house === "Hufflepuff") {
        huffArray.push(student);
      }
      renderStudents(huffArray);
    });
    };

    const ravFilter = () =>  {
      let ravArray = [];
      students.forEach((student) => {
        if(students.house === "Ravenclaw") {
          ravArray.push(student);
        }
        renderStudents(ravArray);
      });
      };

      const slyFilter = () =>  {
        let slyArray = [];
        students.forEach((student) => {
          if(students.house === "Slytherin") {
            slyArray.push(student);
          }
          renderStudents(slyArray);
        });
        };

showALL.addEventListener("click", allFilter);
showGRF.addEventListener("click", grfFilter);
showHUFF.addEventListener("click", huffFilter);
showRAV.addEventListener("click", ravFilter);
showSLY.addEventListener("click", slyFilter);


// render cards card instanceof `<div class="card5" style="width: 150px;">
// <div class="card-header">${student.house}</div>
//  <div class="card-body">
// <img src=${student.imageUrl} class="card-img-top" alt="${student.id}">
// <div class="card-body">
 
// </div>
// <div class=${student.name} "card-footer" >${student.name}</div>
// <button type="button" id="delete--${student.id}" class="delete-button btn btn-danger">Delete</button>
// </div></div>`;
