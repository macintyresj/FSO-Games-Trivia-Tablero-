// Referencias a elementos
const startScreen = document.getElementById("start-screen");
const nameModal = document.getElementById("name-modal");
const playerNamesDiv = document.getElementById("playerNames");
const startGameBtn = document.getElementById("startGame");
const gameBoard = document.getElementById("game-board");
const boardDiv = document.getElementById("board");
const playersDiv = document.getElementById("players");
const questionModal = document.getElementById("question-modal");
const questionCategory = document.getElementById("question-category");
const questionText = document.getElementById("question-text");
const optionsDiv = document.getElementById("options");
const endModal = document.getElementById("end-modal");
const winnerDiv = document.getElementById("winner");
const restartBtn = document.getElementById("restart");
const restartBtn2 = document.getElementById("restart2");
const confirmPlayersBtn = document.getElementById("confirmPlayers");
const numPlayersInput = document.getElementById("numPlayers");

let players = [];
let currentPlayer = 0;
let currentCard = null;
let currentQuestion = null;

// Avatares (imágenes en carpeta images)
const avatars = [
  "images/avatar_1.png",
  "images/avatar_2.png",
  "images/avatar_3.png",
  "images/avatar_4.png",
  "images/avatar_5.png",
  "images/avatar_6.png"
];

// Inicial: ocultar modales excepto startScreen
startScreen.classList.remove("hidden");
nameModal.classList.add("hidden");
gameBoard.classList.add("hidden");
endModal.classList.add("hidden");

// Inicializar 'used' en todas las preguntas
Object.keys(questions).forEach(cat=>{
  questions[cat].forEach(q=> q.used = false);
});

// Confirmar cantidad de jugadores
confirmPlayersBtn.addEventListener("click", ()=>{
  const num = parseInt(numPlayersInput.value);
  if(num < 1 || num > 6){
    alert("Ingrese entre 1 y 6 jugadores");
    return;
  }
  playerNamesDiv.innerHTML = "";
  for(let i=0;i<num;i++){
    const input = document.createElement("input");
    input.placeholder = `Nombre jugador ${i+1}`;
    input.classList.add("player-name-input");
    playerNamesDiv.appendChild(input);
  }
  startScreen.classList.add("hidden");
  nameModal.classList.remove("hidden");
});

// Iniciar juego
startGameBtn.addEventListener("click", ()=>{
  const inputs = document.querySelectorAll(".player-name-input");
  players = [];
  const usedAvatars = [];
  inputs.forEach(input=>{
    const name = input.value.trim() || "Jugador";
    let avatar;
    do {
      avatar = avatars[Math.floor(Math.random()*avatars.length)];
    } while(usedAvatars.includes(avatar));
    usedAvatars.push(avatar);
    players.push({name, avatar, score:0});
  });
  nameModal.classList.add("hidden");
  gameBoard.classList.remove("hidden");
  initBoard();
  renderPlayers();
});

// Renderizar panel de jugadores
function renderPlayers(){
  playersDiv.innerHTML = "";
  players.forEach((p,i)=>{
    const card = document.createElement("div");
    card.classList.add("player-card");
    if(i===currentPlayer) card.classList.add("active");
    card.innerHTML = `<img src="${p.avatar}" alt="avatar"><h3>${p.name}</h3><p>Puntos: ${p.score}</p>`;
    playersDiv.appendChild(card);
  });
}

// // Crear tablero
// function initBoard(){
//   boardDiv.innerHTML = "";
//   const categories = Object.keys(questions);
//   const points = [100,200,300,400,500];

//   // Cabeceras de categorías
//   categories.forEach(cat=>{
//     const header = document.createElement("div");
//     header.classList.add("category-header");
//     header.textContent = cat;
//     boardDiv.appendChild(header);
//   });

//   // Tarjetas de puntos
//   points.forEach(pt=>{
//     categories.forEach(cat=>{
//       const card = document.createElement("div");
//       card.classList.add("bento-card", `board-row-${pt}`);
//       card.dataset.category = cat;
//       card.dataset.points = pt;
//       card.textContent = pt;
//       card.addEventListener("click", ()=>openQuestion(cat, pt, card));
//       boardDiv.appendChild(card);
//     });
//   });
// }
function initBoard() {
  boardDiv.innerHTML = "";
  const categories = Object.keys(questions);
  const points = [100, 200, 300, 400, 500];

  // 🔀 Barajar preguntas al inicio del juego
  categories.forEach(cat => {
    // Agrupar preguntas por puntaje y mezclarlas
    points.forEach(pt => {
      const group = questions[cat].filter(q => q.points === pt);
      shuffleArray(group); // función que definimos abajo
      // Reemplazamos el orden de las preguntas en la categoría original
      const others = questions[cat].filter(q => q.points !== pt);
      questions[cat] = others.concat(group);
    });
  });

  // Cabeceras de categorías
  categories.forEach(cat => {
    const header = document.createElement("div");
    header.classList.add("category-header");
    header.textContent = cat;
    boardDiv.appendChild(header);
  });

  // Tarjetas de puntos
  points.forEach(pt => {
    categories.forEach(cat => {
      const card = document.createElement("div");
      card.classList.add("bento-card", `board-row-${pt}`);
      card.dataset.category = cat;
      card.dataset.points = pt;
      card.textContent = pt;
      card.addEventListener("click", () => openQuestion(cat, pt, card));
      boardDiv.appendChild(card);
    });
  });
}

// Función para mezclar un array (algoritmo de Fisher–Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Abrir modal de pregunta
function openQuestion(cat, pt, card){
  const available = questions[cat].filter(q=>q.points==pt && !q.used);
  if(available.length===0) return;
  const q = available[0];
  currentQuestion = q;
  currentCard = card;
  questionCategory.textContent = `${cat} - ${pt} pts`;
  questionText.textContent = q.question;
  optionsDiv.innerHTML = "";
  q.options.forEach(opt=>{
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.addEventListener("click", ()=>checkAnswer(opt===q.answer, cat, pt));
    optionsDiv.appendChild(btn);
  });
  questionModal.classList.remove("hidden");
}

// Verificar respuesta
// function checkAnswer(correct, cat, pt){
//   const player = players[currentPlayer];
//   if(correct){
//     player.score += pt;
//     // turno sigue
//   } else {
//     if(cat!=="TAX" && cat!=="ACRONIMOS") player.score -= pt;
//     currentPlayer = (currentPlayer+1)%players.length;
//   }
//   currentCard.classList.add("used");
//   currentQuestion.used = true;
//   questionModal.classList.add("hidden");
//   renderPlayers();
//   checkEnd();
// }
function checkAnswer(correct, cat, pt) {
  const player = players[currentPlayer];

  Swal.fire({
    title: correct ? '¡Correcto!' : 'Incorrecto',
    text: correct 
      ? `¡Sumas ${pt} puntos!` 
      : `No es correcto${(cat !== "TAX" && cat !== "ACRONIMOS") ? `, pierdes ${pt} puntos` : ''}`,
    icon: correct ? 'success' : 'error',
    confirmButtonText: 'Continuar',
    confirmButtonColor: correct ?'rgb(165,220,134)':'rgb(242 116 116)'
  }).then(() => {
    // Actualizamos el puntaje
    if (correct) {
      player.score += pt;
      // turno sigue
    } else {
      if(cat !== "TAX" && cat !== "ACRONIMOS") player.score -= pt;
      currentPlayer = (currentPlayer + 1) % players.length;
    }

    // Marcamos tarjeta como usada
    currentCard.classList.add("used");
    currentQuestion.used = true;
    questionModal.classList.add("hidden");

    // Renderizamos jugadores y chequeamos fin
    renderPlayers();
    checkEnd();
  });
}




// Comprobar fin del juego
function checkEnd(){
  const totalCards = document.querySelectorAll(".bento-card").length;
  const usedCards = document.querySelectorAll(".bento-card.used").length;
  if(totalCards === usedCards){
    showEnd();
  }
}

// Mostrar modal final
function showEnd(){
  endModal.classList.remove("hidden");
  const maxScore = Math.max(...players.map(p=>p.score));
  const winners = players.filter(p=>p.score===maxScore);
  winnerDiv.innerHTML = winners.map(w=>{
    return `<div class="player-card active">
              <img src="${w.avatar}" alt="avatar">
              <h3>${w.name}</h3>
              <p>Puntos: ${w.score}</p>
            </div>`;
  }).join("");
}

// Reiniciar juego
restartBtn2.addEventListener("click", ()=>{
  showEnd();

});
restartBtn.addEventListener("click", ()=>{
  location.reload();
});
