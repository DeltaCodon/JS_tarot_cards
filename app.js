`use strist`;

// variables of all of the Tarot Cards

const wholeTarotDeck = [
  { name: "chariot", imagePath: "card_pics/chariot.jpg" },
  { name: "death", imagePath: "card_pics/death.jpg" },
  { name: "devil", imagePath: "card_pics/devil.jpg" },
  { name: "emperor", imagePath: "card_pics/emperor.jpg" },
  { name: "empress", imagePath: "card_pics/empress.jpg" },
  { name: "fool", imagePath: "card_pics/fool.jpg" },
  { name: "hangedMan", imagePath: "card_pics/hangedMan.jpg" },
  { name: "hermit", imagePath: "card_pics/hermit.jpg" },
  // { name: "hierophant", imagePath: "card_pics/hierophant.jpg" },
  { name: "highPriestess", imagePath: "card_pics/highPriestess.jpg" },
  { name: "judgement", imagePath: "card_pics/judgement.jpg" },
  { name: "justice", imagePath: "card_pics/justice.jpg" },
  { name: "lovers", imagePath: "card_pics/lovers.jpg" },
  { name: "magician", imagePath: "card_pics/magician.jpg" },
  { name: "moon", imagePath: "card_pics/moon.jpg" },
  { name: "star", imagePath: "card_pics/star.jpg" },
  { name: "strength", imagePath: "card_pics/strength.jpg" },
  { name: "sun", imagePath: "card_pics/sun.jpg" },
  { name: "temperance", imagePath: "card_pics/temperance.jpg" },
  { name: "hierophant", imagePath: "card_pics/theHierophant.jpg" },
  { name: "tower", imagePath: "card_pics/tower.jpg" },
  { name: "wheelOfFortune", imagePath: "card_pics/wheelOfFortune.jpg" },
  { name: "world", imagePath: "card_pics/world.jpg" },
  { name: "aceOfCups", imagePath: "card_pics/Cups01.jpg" },
  { name: "twoOfCups", imagePath: "card_pics/Cups02.jpg" },
  { name: "threeOfCups", imagePath: "card_pics/Cups03.jpg" },
  { name: "fourOfCups", imagePath: "card_pics/Cups04.jpg" },
  { name: "fiveOfCups", imagePath: "card_pics/Cups05.jpg" },
  { name: "sixOfCups", imagePath: "card_pics/Cups06.jpg" },
  { name: "sevenOfCups", imagePath: "card_pics/Cups07.jpg" },
  { name: "eightOfCups", imagePath: "card_pics/Cups08.jpg" },
  { name: "nineOfCups", imagePath: "card_pics/Cups09.jpg" },
  { name: "tenOfCups", imagePath: "card_pics/Cups10.jpg" },
  { name: "pageOfCups", imagePath: "card_pics/Cups11.jpg" },
  { name: "knightOfCups", imagePath: "card_pics/Cups12.jpg" },
  { name: "queenOfCups", imagePath: "card_pics/Cups13.jpg" },
  { name: "kingOfCups", imagePath: "card_pics/Cups14.jpg" },
  { name: "aceOfPents", imagePath: "card_pics/Pents01.jpg" },
  { name: "twoOfPents", imagePath: "card_pics/Pents02.jpg" },
  { name: "threeOfPents", imagePath: "card_pics/Pents03.jpg" },
  { name: "fourOfPents", imagePath: "card_pics/Pents04.jpg" },
  { name: "fiveOfPents", imagePath: "card_pics/Pents05.jpg" },
  { name: "sixOfPents", imagePath: "card_pics/Pents06.jpg" },
  { name: "sevenOfPents", imagePath: "card_pics/Pents07.jpg" },
  { name: "eightOfPents", imagePath: "card_pics/Pents08.jpg" },
  { name: "nineOfPents", imagePath: "card_pics/Pents09.jpg" },
  { name: "tenOfPents", imagePath: "card_pics/Pents10.jpg" },
  { name: "pageOfPents", imagePath: "card_pics/Pents11.jpg" },
  { name: "knightOfPents", imagePath: "card_pics/Pents12.jpg" },
  { name: "queenOfPents", imagePath: "card_pics/Pents13.jpg" },
  { name: "kingOfPents", imagePath: "card_pics/Pents14.jpg" },
  { name: "aceOfSwords", imagePath: "card_pics/Swords01.jpg" },
  { name: "twoOfSwords", imagePath: "card_pics/Swords02.jpg" },
  { name: "threeOfSwords", imagePath: "card_pics/Swords03.jpg" },
  { name: "fourOfSwords", imagePath: "card_pics/Swords04.jpg" },
  { name: "fiveOfSwords", imagePath: "card_pics/Swords05.jpg" },
  { name: "sixOfSwords", imagePath: "card_pics/Swords06.jpg" },
  { name: "sevenOfSwords", imagePath: "card_pics/Swords07.jpg" },
  { name: "eightOfSwords", imagePath: "card_pics/Swords08.jpg" },
  { name: "nineOfSwords", imagePath: "card_pics/Swords09.jpg" },
  { name: "tenOfSwords", imagePath: "card_pics/Swords10.jpg" },
  { name: "pageOfSwords", imagePath: "card_pics/Swords11.jpg" },
  { name: "knightOfSwords", imagePath: "card_pics/Swords12.jpg" },
  { name: "queenOfSwords", imagePath: "card_pics/Swords13.jpg" },
  { name: "kingOfSwords", imagePath: "card_pics/Swords14.jpg" },
  { name: "aceOfWands", imagePath: "card_pics/Wands01.jpg" },
  { name: "twoOfWands", imagePath: "card_pics/Wands02.jpg" },
  { name: "threeOfWands", imagePath: "card_pics/Wands03.jpg" },
  { name: "fourOfWands", imagePath: "card_pics/Wands04.jpg" },
  { name: "fiveOfWands", imagePath: "card_pics/Wands05.jpg" },
  { name: "sixOfWands", imagePath: "card_pics/Wands06.jpg" },
  { name: "sevenOfWands", imagePath: "card_pics/Wands07.jpg" },
  { name: "eightOfWands", imagePath: "card_pics/Wands08.jpg" },
  { name: "nineOfWands", imagePath: "card_pics/Wands09.jpg" },
  { name: "tenOfWands", imagePath: "card_pics/Wands10.jpg" },
  { name: "pageOfWands", imagePath: "card_pics/Wands11.jpg" },
  { name: "knightOfWands", imagePath: "card_pics/Wands12.jpg" },
  { name: "queenOfWands", imagePath: "card_pics/Wands13.jpg" },
  { name: "kingOfWands", imagePath: "card_pics/Wands14.jpg" },
];

// ###############################

// Global variables for quick access and reduced clutter
const centerCard = document.querySelector(".center-pic");
const modalOverlayBtn = document.querySelector(".all-cards");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const bottomRight = document.querySelector(".bottom-right");
const modalCards = document.querySelector(".modal-card");
const cardListed = document.querySelector(".collected");
const imgContainer = document.getElementById("#images");
let rowValue = 0; // input for the Row
let columnValue = 0; // Input for the Columns
let myDeck = [];
let nextPic = 0;
let numsOfCards;
let cardStance;

// hidding certain views until button is pressed
centerCard.classList.add("hidden");
overlay.classList.add("hidden");
modal.classList.add("hidden");
bottomRight.classList.add("hidden");

// to store the input from row input with the rows button
document.querySelector(".row").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
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
    if (rowValue && columnValue) {
      logic();
    }
    document.querySelector(".column").focus();
  }
});

// to store the input from the column input with the columns button
document.querySelector(".column").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
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
    if (rowValue && columnValue) {
      logic();
    }
    document.querySelector(".next-card").focus();
  }
});

//
//
//
////////// Tarot Card Logic ///////////////

// function to return a image path name when using the regualr string equivalent
const findCardByName = function (cardName) {
  return wholeTarotDeck.find((card) => card.name === cardName);
};

function uprightReversed() {
  const card = Math.floor(Math.random() * 2);

  return card === 1 ? "Upright" : "Reverse";
}

function majOrMin() {
  const probi = Math.floor(Math.random() * 19);
  if (probi >= 0 && probi <= 11) {
    return "Minor";
  } else if (probi >= 12 && probi <= 18) {
    return "Major";
  }
}

function courtOrCrowd() {
  const probi = Math.floor(Math.random() * 19);
  if (probi >= 0 && probi < 12) {
    return "Crowd";
  } else {
    return "Court";
  }
}

function suitePull(suiteR) {
  const court = ["king", "queen", "knight", "page"];
  const crowd = [
    "ace",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
  if (suiteR === "Crowd") {
    return crowd[Math.floor(Math.random() * 10)];
  } else if (suiteR === "Court") {
    return court[Math.floor(Math.random() * 4)];
  }
}

function cardPull(cardR, suiteR) {
  const Major = [
    "fool",
    "magician",
    "highPriestess",
    "empress",
    "emperor",
    "hierophant",
    "lovers",
    "chariot",
    "strength",
    "hermit",
    "wheelOfFortune",
    "justice",
    "hangedMan",
    "death",
    "temperance",
    "devil",
    "tower",
    "star",
    "moon",
    "sun",
    "judgement",
    "world",
  ];

  const Minor = ["Swords", "Cups", "Wands", "Pents"];

  if (cardR === "Minor") {
    let minCard =
      suitePull(suiteR) +
      "Of" +
      Minor[Math.floor(Math.random() * Minor.length)];
    // console.log(minCard);
    return findCardByName(minCard);
  } else if (cardR === "Major") {
    let index = Math.floor(Math.random() * Major.length);
    // console.log(Major[index]);
    return findCardByName(Major[index]);
  }
}

// The card factory for the deck
function logic() {
  myDeck = [];
  numsOfCards = rowValue * columnValue;

  while (myDeck.length < numsOfCards) {
    let suiteR = courtOrCrowd();
    let cardR = majOrMin();
    let result = cardPull(cardR, suiteR);

    if (myDeck.includes(result)) {
      continue;
    } else {
      myDeck.push(result);
    }
  }
  console.log(myDeck);
}

// determines if a card is upright or upside down
const flipCards = function () {
  const positionOfCards = uprightReversed();
  if (nextPic === numsOfCards) {
    console.log("All cards have been shown");
    document
      .querySelector(".next-card")
      .removeEventListener("click", flipCards);
  } else if (nextPic !== numsOfCards) {
    console.log(nextPic);

    if (rowValue && columnValue) {
      centerCard.classList.remove("hidden");
    }

    if (positionOfCards === "Reverse") {
      cardStance = "Reverse";
      centerCard.style.transform = "scaleY(-1)";
      console.log(positionOfCards);
    } else if (positionOfCards === "Upright") {
      cardStance = "Upright";
      centerCard.style.transform = "scaleY(1)";
      console.log(positionOfCards);
    }
    centerCard.src = myDeck[nextPic].imagePath;

    // adds the cards and is standing position to a box in the lower left of the webpage.
    cardListed.textContent +=
      `\r\n` + myDeck[nextPic].name + cardStance + `\r\n`;
  }
  nextPic++;
};

// Reset button to make this all work again:
const startReading = function () {
  rowValue = undefined; // input for the Row
  columnValue = undefined; // Input for the Columns
  myDeck = [];
  nextPic = 0;
  numsOfCards = undefined;
  cardStance = "";
  document.querySelector(".row").value = "";
  document.querySelector(".row").placeholder = "1-5";
  document.querySelector(".column").value = "";
  document.querySelector(".column").placeholder = "1, 3, or 5";
  document.querySelector(".top-page2").textContent =
    "<< You picked no number yet";
  document.querySelector(".top-right2").textContent =
    "You currently have 0 cards >>";
  centerCard.src = "";
  centerCard.classList.add("hidden");
  document.querySelector(".next-card").addEventListener("click", flipCards);
  cardListed.textContent = "";
};

// make buttons go work-o
document.querySelector(".next-card").addEventListener("click", flipCards);
document.querySelector(".new").addEventListener("click", startReading);

////////////////////////////////////////////////

// Modal and overlay hidden and not hidden when pressing the view cards button
modalOverlayBtn.addEventListener("click", function () {
  overlay.classList.toggle("hidden");
  modal.classList.toggle("hidden");
  bottomRight.classList.toggle("hidden");
  let newrange = 1;

  // keydown for eventlistener so we can exit the modal
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      if (!modal.classList.contains("hidden")) {
        overlay.classList.add("hidden");
        modal.classList.add("hidden");
        bottomRight.classList.add("hidden");
        // images.classList.add("hidden");
      }
    }
  });

  // this loop will unhide the cards modal that has tarot cards in it
  for (let r = 1; r < rowValue + 1; r++) {
    for (let c = 1; c < columnValue + 1; c++) {
      let images = document.querySelector(`.row${newrange}`);
      images.classList.remove("hidden");
      // assign the img tags with src from an array containing file path to tarot card pictures
      images.src = myDeck[newrange++ - 1].imagePath;

      // card facing:
      if (uprightReversed() === "Reverse") {
        cardStance = "Reverse";
        images.style.transform = "scaleY(-1)";
      } else if (uprightReversed() === "Upright") {
        images = "Upright";
        centerCard.style.transform = "scaleY(1)";
      }
    }
  }
});

/////////////////////////////////////////////////

// let curs = document.querySelector(".cursor");

// document.addEventListener("mousemove", (e) => {
//   let x = e.pageX;
//   let y = e.pageY;
//   curs.style.left = x - 22 + "px";
//   curs.style.top = y - 22 + "px";
// });

// document.addEventListener("mouseleave", (e) => {
//   let x = e.pageX;
//   let y = e.pageY;
//   curs.style.left = x - 22 + "px";
//   curs.style.top = y - 22 + "px";
// });
//////////////////////////////////////////////
