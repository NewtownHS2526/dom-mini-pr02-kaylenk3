console.log("Space Launch Dash running");

const moveTo = (item, spot) => (spot <= 6 ? item.style.setProperty("grid-column", spot) : null);

let apollo_spot = 1;
let nebula_spot = 1;
let comet_spot  = 1;

// Query Selectors
const apolloBtn   = document.querySelector("#apollo-btn");
const nebulaBtn   = document.querySelector("#nebula-btn");
const cometBtn    = document.querySelector("#comet-btn");

const apolloRocket = document.querySelector("#apollo-rocket");
const nebulaRocket = document.querySelector("#nebula-rocket");
const cometRocket  = document.querySelector("#comet-rocket");

const winnerBox = document.querySelector("#winner");

// Click Handlers
const boostApollo = (e) => {
  apollo_spot += 2;
  changePosition(apolloRocket, apollo_spot);
};

const boostNebula = (e) => {
  nebula_spot += 2;
  changePosition(nebulaRocket, nebula_spot);
};

const boostComet = (e) => {
  comet_spot += 2;
  changePosition(cometRocket, comet_spot);
};

// Winner Check
const checkWinner = (spot, item) => {
  if (spot === 6) {
  winnerBox.innerHTML = item + `is THE WINNER!!!`
  }
};

// Events
apolloBtn.addEventListener("click", boostApollo);
nebulaBtn.addEventListener("click", boostNebula);
cometBtn.addEventListener("click", boostComet);
