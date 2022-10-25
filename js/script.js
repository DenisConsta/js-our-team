const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg"
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg"
  }
];

const ul = document.createElement('ul');
document.querySelector('.my-container').append(ul);

initCards();

function initCards(){
  for(let person of team){
    document.querySelector('.row').innerHTML += createCard(person);
  }
}

function createCard(object) {
  const card = `
    <div class="col mb-5 d-flex justify-content-center ">
      <div class="card" >
        <div class="card-top">
          <img class="card-img-top" src="assets/img/${object.image}" alt="">
        </div>
        <div class="card-body text-center">
          <h3 class="name">${object.name}</h3>
          <h4 class="role lead">${object.role}</h4>
        </div>
      </div>
    </div>
  `;
  return card;
}

