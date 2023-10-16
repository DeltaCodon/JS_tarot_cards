`use strist`;

// variables of all of the Tarot Cards
const chariot = "card_pics/chariot.jpg";
const aceOfCups = "card_pics/Cups01.jpg";
const twoOfCups = "card_pics/Cups02.jpg";
const threOfCups = "card_pics/Cups03.jpg";
const fourOfCups = "card_pics/Cups04.jpg";
const fiveOfCups = "card_pics/Cups05.jpg";
const sixOfCups = "card_pics/Cups06.jpg";
const sevenOfCups = "card_pics/Cups07.jpg";
const eightOfCups = "card_pics/Cups08.jpg";
const nineOfCups = "card_pics/Cups09.jpg";
const tenOfCups = "card_pics/Cups10.jpg";
const pageOfCups = "card_pics/Cups11.jpg";
const knightOfCups = "card_pics/Cups12.jpg";
const queenOfCups = "card_pics/Cups13.jpg";
const kingOfCups = "card_pics/Cups14.jpg";
const death = "card_pics/death.jpg";
const devil = "card_pics/devil.jpg";
const emperor = "card_pics/emperor.jpg";
const empress = "card_pics/empress.jpg";
const fool = "card_pics/fool.jpg";
const hangedMan = "card_pics/hangedMan.jpg";
const hermit = "card_pics/hermit.jpg";
const hierophant = "card_pics/hierophant.jpg";
const highPriestess = "card_pics/highPriestess.jpg";
const judgement = "card_pics/judgement.jpg";
const justice = "card_pics/justice.jpg";
const lovers = "card_pics/lovers.jpg";
const magician = "card_pics/magician.jpg";
const moon = "card_pics/moon.jpg";
const aceofPents = "card_pics/Pents01.jpg";
const twoOfPents = "card_pics/Pents02.jpg";
const threOfPents = "card_pics/Pents03.jpg";
const fourOfPents = "card_pics/Pents04.jpg";
const fiveOfPents = "card_pics/Pents05.jpg";
const sixOfPents = "card_pics/Pents06.jpg";
const sevenOfPents = "card_pics/Pents07.jpg";
const eightOfPents = "card_pics/Pents08.jpg";
const nineOfPents = "card_pics/Pents09.jpg";
const tenOfPents = "card_pics/Pents10.jpg";
const pageOfPents = "card_pics/Pents11.jpg";
const knightOfPents = "card_pics/Pents12.jpg";
const queenOfPents = "card_pics/Pents13.jpg";
const kingOfPents = "card_pics/Pents14.jpg";
const star = "card_pics/star.jpg";
const strength = "card_pics/strength.jpg";
const sun = "card_pics/sun.jpg";
const aceofSwords = "card_pics/Swords01.jpg";
const twoOfSwords = "card_pics/Swords02.jpg";
const threOfSwords = "card_pics/Swords03.jpg";
const fourOfSwords = "card_pics/Swords04.jpg";
const fiveOfSwords = "card_pics/Swords05.jpg";
const sixOfSwords = "card_pics/Swords06.jpg";
const sevenOfSwords = "card_pics/Swords07.jpg";
const eightOfSwords = "card_pics/Swords08.jpg";
const nineOfSwords = "card_pics/Swords09.jpg";
const tenOfSwords = "card_pics/Swords10.jpg";
const pageOfSwords = "card_pics/Swords11.jpg";
const knightOfSwords = "card_pics/Swords12.jpg";
const queenOfSwords = "card_pics/Swords13.jpg";
const kingOfSwords = "card_pics/Swords14.jpg";
const temperance = "card_pics/temperance.jpg";
const theHierophant = "card_pics/theHierophant.jpg";
const tower = "card_pics/tower.jpg";
const aceofWands = "card_pics/Wands01.jpg";
const twoOfWands = "card_pics/Wands02.jpg";
const threOfWands = "card_pics/Wands03.jpg";
const fourOfWands = "card_pics/Wands04.jpg";
const fiveOfWands = "card_pics/Wands05.jpg";
const sixOfWands = "card_pics/Wands06.jpg";
const sevenOfWands = "card_pics/Wands07.jpg";
const eightOfWands = "card_pics/Wands08.jpg";
const nineOfWands = "card_pics/Wands09.jpg";
const tenOfWands = "card_pics/Wands10.jpg";
const pageOfWands = "card_pics/Wands11.jpg";
const knightOfWands = "card_pics/Wands12.jpg";
const queenOfWands = "card_pics/Wands13.jpg";
const kingOfWands = "card_pics/Wands14.jpg";
const wheelOfFortune = "card_pics/wheelOfFortune.jpg";
const world = "card_pics/world.jp";

// ###############################

// Global variables for quick access and reduced clutter
const centerCard = document.querySelector(".center-pic");
const modalOverlayBtn = document.querySelector(".all-cards");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const bottomRight = document.querySelector(".bottom-right");
const modalCards = document.querySelector(".modal-card");
let rowValue = 0;
let columnValue = 0;

// hidding certain views until button is pressed
centerCard.classList.add("hidden");
overlay.classList.add("hidden");
modal.classList.add("hidden");
bottomRight.classList.add("hidden");

// to store the input from row input with the rows button
document.querySelector(".rows").addEventListener("click", function () {
  let inputValue = Number(document.querySelector(".row").value);

  if (inputValue == 1) {
    rowValue = inputValue;
    document.querySelector(
      ".top-page2"
    ).textContent = `You picked ${inputValue} row`;
  } else if (inputValue > 1 && inputValue < 6) {
    rowValue = inputValue;
    document.querySelector(
      ".top-page2"
    ).textContent = `You picked ${inputValue} rows`;
  } else {
    document.querySelector(".top-page2").textContent =
      "<< You didn't chose a number from 1 - 5. Try again...";
  }
});

// to store the input from the column input with the columns button
document.querySelector(".columns").addEventListener("click", function () {
  let inputValue = Number(document.querySelector(".column").value);

  if (inputValue == 1) {
    columnValue = inputValue;
    document.querySelector(
      ".top-right2"
    ).textContent = `You pick ${inputValue} card for this row!`;
  } else if (inputValue === 3 || inputValue === 5) {
    columnValue = inputValue;
    document.querySelector(
      ".top-right2"
    ).textContent = `You pick ${inputValue} cards for this row!`;
  } else {
    document.querySelector(".top-right2").textContent =
      "You didn't choose a number from 1, 3, or 5. Try again...";
  }
});

// Modal and overlay hidden and not hidden when pressing the view cards button
modalOverlayBtn.addEventListener("click", function () {
  overlay.classList.toggle("hidden");
  modal.classList.toggle("hidden");
  bottomRight.classList.toggle("hidden");

  //will turn "modalCards" into an input for rows
  for (let i = 0; i < modalCards; ++i) {
    let cardRows = document.querySelector(`.row${i}`);
    cardRows.classList.toggle("hidden");
  }
});
