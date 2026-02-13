// ========================================
// SPACE SYSTEM - ENHANCED LOVE SYSTEM
// Outer Space Themed, Fully Functional
// ========================================

// --- Letter Modal Interactivity ---
let typingTimer = null;
let letterAudio = null;

function showLetterModal(letterText) {
  // Auto-play background music for letter
  if (!letterAudio) {
    letterAudio = new Audio(
      "assets/Eliza Maturan - Museo (Official Music Video).mp3",
    );
    letterAudio.loop = true;
    letterAudio.volume = 0.5;
  }
  letterAudio.play().catch((e) => console.log("Audio play blocked:", e));

  const modal = document.querySelector(".letter-modal-overlay");
  if (!modal) {
    console.error("Letter modal overlay not found!");
    return;
  }
  const textEl = modal.querySelector(".letter-text");

  // Clear any existing timer
  if (typingTimer) {
    clearTimeout(typingTimer);
    typingTimer = null;
  }

  textEl.innerHTML = "";
  modal.classList.remove("hidden");
  modal.style.display = "flex"; // Ensure it's visible

  // Animated typing effect
  let i = 0;
  function typeLetter() {
    if (i <= letterText.length) {
      const currentText = letterText.slice(0, i).replace(/\n/g, "<br>");
      textEl.innerHTML = `<span class='letter-typing'>${currentText}</span>`;
      i++;
      typingTimer = setTimeout(typeLetter, 30);
    } else {
      textEl.innerHTML = `<span class='letter-typing'>${letterText.replace(/\n/g, "<br>")}</span>`;
      modal.querySelector(".close-letter-btn").disabled = false;
      modal.querySelector(".reply-btn").disabled = false;
      typingTimer = null;
    }
  }

  modal.querySelector(".close-letter-btn").disabled = false;
  modal.querySelector(".reply-btn").disabled = false;
  typeLetter();

  modal.querySelector(".close-letter-btn").onclick = () => {
    if (typingTimer) {
      clearTimeout(typingTimer);
      typingTimer = null;
    }
    if (letterAudio) {
      letterAudio.pause();
      letterAudio.currentTime = 0;
    }
    modal.classList.add("hidden");
    modal.style.display = "none";
  };

  modal.querySelector(".reply-btn").onclick = () => {
    showMiniReplyModal();
  };
}

function showMiniReplyModal() {
  let mini = document.createElement("div");
  mini.className = "mini-modal";
  mini.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #2d1b4e, #0a0e27);
    border: 3px solid #ff1493;
    border-radius: 12px;
    padding: 1.5rem;
    z-index: 6000;
    box-shadow: 0 0 30px rgba(255, 20, 147, 0.6);
    text-align: center;
    color: white;
    font-family: 'Press Start 2P', cursive;
    display: flex;
    flex-direction: column;
    gap: 15px;
    min-width: 300px;
  `;

  mini.innerHTML = `
    <div style="font-size: 0.8rem; margin-bottom: 5px;">Write your reply 💌</div>
    <textarea placeholder='Type here...' style="
      padding: 10px;
      border: 2px solid #ff1493;
      border-radius: 6px;
      background: rgba(10, 14, 39, 0.7);
      color: #ffb6d9;
      font-family: 'Press Start 2P', cursive;
      font-size: 0.7rem;
      min-height: 80px;
      resize: none;
    "></textarea>
    <div style="display: flex; gap: 10px; justify-content: center;">
      <button class="send-btn" style="
        padding: 8px 15px;
        background: linear-gradient(135deg, #ff1493, #ff69b4);
        color: white;
        border: 2px solid #ff00ff;
        border-radius: 6px;
        font-family: 'Press Start 2P', cursive;
        font-size: 0.6rem;
        cursor: pointer;
      ">Send</button>
      <button class="cancel-btn" style="
        padding: 8px 15px;
        background: #444;
        color: white;
        border: 2px solid #666;
        border-radius: 6px;
        font-family: 'Press Start 2P', cursive;
        font-size: 0.6rem;
        cursor: pointer;
      ">Cancel</button>
    </div>
  `;

  document.body.appendChild(mini);

  mini.querySelector(".send-btn").onclick = () => {
    const text = mini.querySelector("textarea").value;
    if (text.trim()) {
      mini.remove();
      alert("Reply sent! 💌");
      playSound("success");
    } else {
      playSound("error");
    }
  };

  mini.querySelector(".cancel-btn").onclick = () => {
    mini.remove();
    playSound("click");
  };
}

// ========== CONFIGURATION & DATA ==========

const config = {
  soundEnabled: true,
  darkTheme: false,
  volume: 0.7,
  achievements: {},
  gameScores: {},
  musicPreference: 0.7,
};

// Sample playlist data
const playlistData = [
  {
    id: 1,
    title: "TADHANA",
    artist: "Up Dharma Down",
    duration: 214,
    audioUrl: "assets/TADHANA (Lyrics) - UP DHARMA DOWN.mp3",
  },
  {
    id: 2,
    title: "UNTI-UNTI",
    artist: "Up Dharma Down",
    duration: 198,
    audioUrl: "assets/Up Dharma Down - Unti-Unti.mp3",
  },
  {
    id: 3,
    title: "OO",
    artist: "Up Dharma Down",
    duration: 187,
    audioUrl: "assets/Up Dharma Down - Oo (Lyrics).mp3",
  },
  {
    id: 4,
    title: "BULONG",
    artist: "December Avenue",
    duration: 205,
    audioUrl: "assets/December Avenue - Bulong (OFFICIAL MUSIC VIDEO).mp3",
  },
];

// ========== UTILITY FUNCTIONS ==========

function playSound(type) {
  if (!config.soundEnabled) return;
  try {
    const audioContext = new (
      window.AudioContext || window.webkitAudioContext
    )();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    let frequency, duration;
    switch (type) {
      case "click":
        frequency = 800;
        duration = 0.1;
        break;
      case "open":
        frequency = 600;
        duration = 0.15;
        break;
      case "close":
        frequency = 400;
        duration = 0.1;
        break;
      case "success":
        frequency = 1000;
        duration = 0.2;
        break;
      case "error":
        frequency = 300;
        duration = 0.15;
        break;
      default:
        return;
    }
    oscillator.frequency.value = frequency;
    gainNode.gain.setValueAtTime(0.1 * config.volume, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + duration,
    );
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  } catch (e) {
    console.log("Sound error:", e);
  }
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

function getRandomPosition() {
  const desktop = document.getElementById("desktop");
  const maxX = desktop.offsetWidth - 350;
  const maxY = desktop.offsetHeight - 300;
  return {
    x: Math.max(50, Math.random() * maxX),
    y: Math.max(50, Math.random() * maxY),
  };
}

// ========== WINDOW MANAGER ==========

class WindowManager {
  constructor() {
    this.zIndexBase = 1000;
    this.windows = [];
  }

  createWindow(type, title, content) {
    const template = document.getElementById("windowTemplate");
    const windowEl = template.content.cloneNode(true).querySelector(".window");
    windowEl.dataset.windowType = type;
    windowEl.querySelector(".window-title").textContent = title;
    windowEl.querySelector(".window-content").appendChild(content);

    const pos = getRandomPosition();
    windowEl.style.left = pos.x + "px";
    windowEl.style.top = pos.y + "px";
    windowEl.style.zIndex = ++this.zIndexBase;

    const container = document.getElementById("windowsContainer");
    container.appendChild(windowEl);
    this.setupWindowControls(windowEl);
    this.windows.push(windowEl);

    playSound("open");
    return windowEl;
  }

  setupWindowControls(windowEl) {
    const closeBtn = windowEl.querySelector(".close-btn");
    const header = windowEl.querySelector(".window-header");

    closeBtn.onclick = () => {
      // Cleanup audio if it's a playlist window
      if (windowEl.dataset.windowType === "playlist") {
        const audio = windowEl._audio;
        if (audio) {
          audio.pause();
          audio.src = "";
        }
        if (windowEl._progressInterval) {
          clearInterval(windowEl._progressInterval);
        }
      }
      windowEl.remove();
      this.windows = this.windows.filter((w) => w !== windowEl);
      playSound("close");
    };

    let isDragging = false;
    let initialX, initialY;

    const startDrag = (e) => {
      const clientX = e.type.includes("touch")
        ? e.touches[0].clientX
        : e.clientX;
      const clientY = e.type.includes("touch")
        ? e.touches[0].clientY
        : e.clientY;

      isDragging = true;
      initialX = clientX - windowEl.offsetLeft;
      initialY = clientY - windowEl.offsetTop;
      windowEl.style.zIndex = ++this.zIndexBase;
      header.style.cursor = "grabbing";
    };

    const moveDrag = (e) => {
      if (!isDragging) return;
      const clientX = e.type.includes("touch")
        ? e.touches[0].clientX
        : e.clientX;
      const clientY = e.type.includes("touch")
        ? e.touches[0].clientY
        : e.clientY;

      let currentX = clientX - initialX;
      let currentY = clientY - initialY;

      const desktop = document.getElementById("desktop");
      const maxX = desktop.offsetWidth - windowEl.offsetWidth;
      const maxY = desktop.offsetHeight - windowEl.offsetHeight;

      currentX = Math.max(0, Math.min(currentX, maxX));
      currentY = Math.max(0, Math.min(currentY, maxY));

      windowEl.style.left = currentX + "px";
      windowEl.style.top = currentY + "px";
    };

    const endDrag = () => {
      isDragging = false;
      header.style.cursor = "move";
    };

    header.onmousedown = startDrag;
    window.onmousemove = moveDrag;
    window.onmouseup = endDrag;

    header.ontouchstart = startDrag;
    window.ontouchmove = (e) => {
      if (isDragging) {
        e.preventDefault();
        moveDrag(e);
      }
    };
    window.ontouchend = endDrag;

    windowEl.onmousedown = () => {
      windowEl.style.zIndex = ++this.zIndexBase;
    };
  }
}

// ========== GAMES SYSTEM ==========

class GamesSystem {
  constructor(windowManager) {
    this.windowManager = windowManager;
  }

  create() {
    const template = document.getElementById("gamesTemplate");
    const content = template.content.cloneNode(true);
    const wrapper = document.createElement("div");
    wrapper.appendChild(content);

    const win = this.windowManager.createWindow(
      "games",
      "🎮 Mini Games",
      wrapper,
    );
    this.setupGames(win);
    return win;
  }

  setupGames(win) {
    const gameCards = win.querySelectorAll(".game-card-advanced");
    gameCards.forEach((card) => {
      card.onclick = () => {
        const gameType = card.dataset.game;
        win.querySelector(".close-btn").click();
        this.startGame(gameType);
      };
    });
  }

  startGame(gameType) {
    if (gameType === "hearts") {
      this.startHeartsGame();
    } else if (gameType === "memory") {
      this.startMemoryGame();
    } else if (gameType === "wordle") {
      this.startWordleGame();
    }
  }

  startHeartsGame() {
    const board = document.getElementById("gameBoard-hearts");
    board.classList.remove("hidden");
    board.style.zIndex = 5000;
    const container = document.querySelector(".hearts-game-container");
    const scoreEl = document.querySelector("#gameBoard-hearts .score");
    const timerEl = document.querySelector("#gameBoard-hearts .timer");

    let score = 0,
      timeLeft = 30,
      gameActive = true;
    container.innerHTML = "";
    scoreEl.textContent = 0;
    timerEl.textContent = timeLeft;

    const createBerry = () => {
      if (!gameActive) return;
      const berry = document.createElement("div");
      berry.className = "falling-berry";
      berry.innerHTML = `
        <div class="berry-inner">🍓</div>
        <div class="berry-glow"></div>
      `;

      const size = Math.random() * 20 + 30;
      berry.style.left = Math.random() * (container.offsetWidth - size) + "px";
      berry.style.top = "-50px";
      berry.style.fontSize = size + "px";

      let y = -50;
      let speed = Math.random() * 2 + 2;
      let rotation = 0;
      let rotSpeed = (Math.random() - 0.5) * 5;

      const fall = () => {
        if (!gameActive) return;
        y += speed;
        rotation += rotSpeed;
        berry.style.top = y + "px";
        berry.style.transform = `rotate(${rotation}deg)`;

        if (y > container.offsetHeight) {
          berry.remove();
          return;
        }
        requestAnimationFrame(fall);
      };

      berry.onclick = (e) => {
        if (!gameActive) return;
        score++;
        scoreEl.textContent = score;

        // Click effect
        const burst = document.createElement("div");
        burst.className = "berry-burst";
        burst.style.left = e.clientX + "px";
        burst.style.top = e.clientY + "px";
        document.body.appendChild(burst);
        setTimeout(() => burst.remove(), 500);

        berry.remove();
        playSound("success");

        if (score >= 14) {
          gameActive = false;
          clearInterval(spawnInterval);
          clearInterval(timerInterval);
          this.triggerValentineSurprise(container);
        }
      };

      container.appendChild(berry);
      requestAnimationFrame(fall);
    };

    const spawnInterval = setInterval(createBerry, 600);
    const timerInterval = setInterval(() => {
      if (!gameActive) return;
      timeLeft--;
      timerEl.textContent = timeLeft;
      if (timeLeft <= 0) {
        gameActive = false;
        clearInterval(timerInterval);
        clearInterval(spawnInterval);
        alert("Time's up! You caught " + score + " strawberries!");
        board.classList.add("hidden");
      }
    }, 1000);

    board.querySelector(".game-back-btn").onclick = () => {
      gameActive = false;
      clearInterval(timerInterval);
      clearInterval(spawnInterval);
      board.classList.add("hidden");
    };
  }

  startMemoryGame() {
    const board = document.getElementById("gameBoard-memory");
    board.classList.remove("hidden");
    board.style.zIndex = 5000;
    const container = document.querySelector(".memory-game-container");
    const matchesEl = document.querySelector("#gameBoard-memory .matches");

    const icons = ["❤️", "💖", "✨", "🌹", "🍓", "🎀"];
    const cards = [...icons, ...icons];
    let flipped = [];
    let matched = 0;
    let gameActive = true;

    cards.sort(() => Math.random() - 0.5);

    container.innerHTML = "";
    container.className = "memory-grid-advanced";

    cards.forEach((icon, index) => {
      const cardEl = document.createElement("div");
      cardEl.className = "memory-card-advanced";
      cardEl.innerHTML = `
        <div class="card-inner-advanced">
          <div class="card-front-advanced">?</div>
          <div class="card-back-advanced">${icon}</div>
        </div>
      `;

      cardEl.dataset.icon = icon;
      cardEl.dataset.index = index;
      cardEl.dataset.flipped = "false";

      cardEl.onclick = () => {
        if (
          !gameActive ||
          cardEl.dataset.flipped === "true" ||
          flipped.length >= 2
        )
          return;

        cardEl.classList.add("is-flipped");
        cardEl.dataset.flipped = "true";
        flipped.push(cardEl);

        if (flipped.length === 2) {
          if (flipped[0].dataset.icon === flipped[1].dataset.icon) {
            matched++;
            matchesEl.textContent = matched;
            playSound("success");
            flipped = [];
            if (matched === 6) {
              gameActive = false;
              setTimeout(() => {
                alert("Perfect Match! 🎉");
                board.classList.add("hidden");
              }, 500);
            }
          } else {
            playSound("error");
            setTimeout(() => {
              flipped[0].classList.remove("is-flipped");
              flipped[0].dataset.flipped = "false";
              flipped[1].classList.remove("is-flipped");
              flipped[1].dataset.flipped = "false";
              flipped = [];
            }, 1000);
          }
        }
      };

      container.appendChild(cardEl);
    });

    board.querySelector(".game-back-btn").onclick = () => {
      gameActive = false;
      board.classList.add("hidden");
    };
  }

  startWordleGame() {
    const board = document.getElementById("gameBoard-wordle");
    board.classList.remove("hidden");
    board.style.zIndex = 5000;
    const container = board.querySelector(".wordle-container");
    container.innerHTML = `
      <div class="wordle-advanced">
        <div class="wordle-grid-advanced"></div>
        <div class="wordle-input-area">
          <input type="text" maxlength="4" class="wordle-input-pixel" placeholder="TYPE HERE">
          <button class="wordle-guess-btn">GUESS</button>
        </div>
        <div class="wordle-hint-pixel">Guess the 4-letter word!</div>
        <button id="giveUpBtn" class="wordle-giveup-btn">GIVE UP</button>
      </div>
    `;

    const grid = container.querySelector(".wordle-grid-advanced");
    const input = container.querySelector(".wordle-input-pixel");
    const guessBtn = container.querySelector(".wordle-guess-btn");
    const hintEl = container.querySelector(".wordle-hint-pixel");
    const giveUpBtn = container.querySelector("#giveUpBtn");

    const secretWord = "LOVE";
    let attempts = 0;
    const maxAttempts = 6;
    let gameActive = true;

    // Initialize grid
    for (let i = 0; i < maxAttempts * 4; i++) {
      const cell = document.createElement("div");
      cell.className = "wordle-cell-pixel";
      grid.appendChild(cell);
    }

    const makeGuess = () => {
      if (!gameActive || attempts >= maxAttempts) return;
      const guess = input.value.toUpperCase();
      if (guess.length !== 4) {
        hintEl.textContent = "Must be 4 letters!";
        return;
      }
      input.value = "";

      const cells = grid.querySelectorAll(".wordle-cell-pixel");
      for (let i = 0; i < 4; i++) {
        const cell = cells[attempts * 4 + i];
        cell.textContent = guess[i];

        if (guess[i] === secretWord[i]) {
          cell.classList.add("correct");
        } else if (secretWord.includes(guess[i])) {
          cell.classList.add("present");
        } else {
          cell.classList.add("absent");
        }
      }

      attempts++;
      if (guess === secretWord) {
        gameActive = false;
        hintEl.textContent = "YOU GOT IT! 🎉";
        hintEl.style.color = "var(--space-cyan)";
        playSound("success");
      } else if (attempts >= maxAttempts) {
        gameActive = false;
        hintEl.textContent = "GAME OVER! Word: " + secretWord;
        playSound("error");
      } else {
        hintEl.textContent = `Attempt ${attempts}/${maxAttempts}`;
        playSound("click");
      }
    };

    guessBtn.onclick = makeGuess;
    input.onkeypress = (e) => {
      if (e.key === "Enter") makeGuess();
    };

    giveUpBtn.onclick = () => {
      if (!gameActive) return;
      gameActive = false;
      hintEl.textContent = "The word was: " + secretWord;
      playSound("error");
    };

    board.querySelector(".game-back-btn").onclick = () => {
      gameActive = false;
      board.classList.add("hidden");
    };
  }

  triggerValentineSurprise(container) {
    container.innerHTML = "";
    const bigHeart = document.createElement("div");
    bigHeart.textContent = "❤️";
    bigHeart.style.fontSize = "10rem";
    bigHeart.style.cursor = "pointer";
    bigHeart.style.display = "flex";
    bigHeart.style.justifyContent = "center";
    bigHeart.style.alignItems = "center";
    bigHeart.style.height = "100%";
    bigHeart.style.animation = "pulse 1s infinite";
    bigHeart.onclick = () => {
      container.innerHTML = `
        <div style="text-align:center; padding:12px; display:flex; flex-direction:column; gap:10px;">
          <h2 style="color:#ff69b4; font-size:0.85rem; margin:0;">Will you be my valentine?</h2>
          <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2FoeHA1amdpZHljMjhxeXl4aDhoZm8zMXZyMjY4ZGx6bDJ0aHoxMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cFZ7Sd0Eiz1urtmFSb/giphy.gif" style="width:100%; max-width:160px; height:auto; border-radius:8px; align-self:center;" alt="romantic">
          <div style="display:flex; justify-content:center; gap:10px;">
            <button id="valYes" class="pixel-button" style="padding:0.5rem 1rem; font-size:0.65rem;">YES</button>
            <button id="valNo" class="pixel-button" style="position:relative; padding:0.5rem 1rem; font-size:0.65rem;">NO</button>
          </div>
        </div>
      `;
      const noBtn = document.getElementById("valNo");
      noBtn.onmouseover = () => {
        noBtn.style.position = "fixed";
        noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
        noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
      };
      document.getElementById("valYes").onclick = () => {
        container.innerHTML = `
          <div style="text-align:center; padding:12px; display:flex; flex-direction:column; gap:10px;">
            <p style="color:#ff69b4; font-size:0.7rem; margin:0;">It was my pleasure having you as my Valentine ❤️</p>
            <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDhqZml2a3pydzFqcGZhMnlhNjR6ZW0xNXFoYnBxN2RqdzdkaTJuNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vzbq5TreSbtW6h1tGi/giphy.gif" style="width:100%; max-width:160px; height:auto; border-radius:8px; align-self:center;" alt="celebration">
            <button id="surpriseBtn" class="pixel-button" style="padding:0.5rem 1rem; font-size:0.65rem;">click here for surprise</button>
          </div>
        `;
        document.getElementById("surpriseBtn").onclick = () =>
          showFinalSurprise();
      };
    };
    container.appendChild(bigHeart);
  }
}

// ========== MAIN LOVE SYSTEM CLASS ==========

class LoveSystem {
  constructor() {
    this.windowManager = new WindowManager();
    this.gamesSystem = new GamesSystem(this.windowManager);
  }

  init() {
    document.getElementById("playBtn").onclick = () => this.startGame();
    this.setupTires();
    this.setupTaskbar();
    this.setupHotWheels();
  }

  setupTaskbar() {
    const startBtn = document.getElementById("startBtn");
    const soundToggle = document.getElementById("soundToggle");
    const themeToggle = document.getElementById("themeToggle");
    const clockDisplay = document.getElementById("clockDisplay");

    startBtn.onclick = () => {
      this.openStartMenu();
    };

    soundToggle.onclick = () => {
      config.soundEnabled = !config.soundEnabled;
      soundToggle.textContent = config.soundEnabled ? "🔊" : "🔇";
      playSound("click");
    };

    themeToggle.onclick = () => {
      config.darkTheme = !config.darkTheme;
      document.body.classList.toggle("dark-theme");
      playSound("click");
    };

    // Update clock
    setInterval(() => {
      const now = new Date();
      clockDisplay.textContent = now.toLocaleTimeString();
    }, 1000);
  }

  openStartMenu() {
    const menu = document.createElement("div");
    menu.style.cssText = `
      position: fixed;
      bottom: 60px;
      left: 20px;
      background: linear-gradient(135deg, rgba(45, 27, 78, 0.95), rgba(10, 14, 39, 0.95));
      border: 3px solid #ff1493;
      border-radius: 8px;
      padding: 1rem;
      z-index: 300;
      box-shadow: 0 0 20px rgba(255, 20, 147, 0.4);
    `;

    const items = [
      { label: "🎵 Music", action: () => this.openMusicWindow() },
      { label: "💌 Letters", action: () => this.openLettersWindow() },
      { label: "📸 Memories", action: () => this.openMemoriesWindow() },
      { label: "🎮 Games", action: () => this.gamesSystem.create() },
    ];

    items.forEach((item) => {
      const btn = document.createElement("button");
      btn.textContent = item.label;
      btn.style.cssText = `
        display: block;
        width: 100%;
        padding: 0.8rem;
        margin-bottom: 0.5rem;
        background: linear-gradient(135deg, #ff1493, #ff69b4);
        color: white;
        border: 2px solid #ff00ff;
        border-radius: 6px;
        font-family: 'Press Start 2P', cursive;
        font-size: 0.7rem;
        cursor: pointer;
        transition: all 0.2s;
      `;
      btn.onmouseover = () => {
        btn.style.boxShadow = "0 0 15px rgba(255, 20, 147, 0.5)";
      };
      btn.onmouseout = () => {
        btn.style.boxShadow = "none";
      };
      btn.onclick = () => {
        item.action();
        menu.remove();
        playSound("click");
      };
      menu.appendChild(btn);
    });

    document.body.appendChild(menu);
    setTimeout(() => {
      document.addEventListener("click", function closeMenu(e) {
        if (!menu.contains(e.target) && e.target.id !== "startBtn") {
          menu.remove();
          document.removeEventListener("click", closeMenu);
        }
      });
    }, 0);
  }

  openMusicWindow() {
    const template = document.getElementById("playlistTemplate");
    const content = template.content.cloneNode(true);
    const wrapper = document.createElement("div");
    wrapper.appendChild(content);

    const win = this.windowManager.createWindow(
      "playlist",
      "🎵 Songs for you",
      wrapper,
    );
    this.setupPlayer(win);
  }

  setupPlayer(win) {
    // Make modal draggable
    const windowEl = win.closest(".window");
    const header = windowEl.querySelector(".window-header");
    let isDragging = false,
      offsetX = 0,
      offsetY = 0;
    header.style.cursor = "grab";
    header.onmousedown = (e) => {
      isDragging = true;
      offsetX = e.clientX - windowEl.offsetLeft;
      offsetY = e.clientY - windowEl.offsetTop;
      header.style.cursor = "grabbing";
    };
    document.onmousemove = (e) => {
      if (!isDragging) return;
      windowEl.style.left = e.clientX - offsetX + "px";
      windowEl.style.top = e.clientY - offsetY + "px";
    };
    document.onmouseup = () => {
      isDragging = false;
      header.style.cursor = "grab";
    };

    // Minimize functionality
    const minimizeBtn = windowEl.querySelector(".minimize-btn");
    minimizeBtn.onclick = () => {
      windowEl.style.display = "none";
      // Optionally, add to taskbar or show a restore button
      // For now, restore by clicking taskbar-app
      const taskbarApp = document.createElement("div");
      taskbarApp.className = "taskbar-app";
      taskbarApp.textContent = "🎵 Songs for you";
      document.querySelector(".taskbar-apps").appendChild(taskbarApp);
      taskbarApp.onclick = () => {
        windowEl.style.display = "";
        taskbarApp.remove();
      };
    };
    const songsContainer = win.querySelector(".songs-container");
    const songTitleDisplay = win.querySelector(".song-title");
    const playPauseBtn = win.querySelector(".play-pause-btn");
    const prevBtn = win.querySelector(".prev-track-btn");
    const nextBtn = win.querySelector(".next-track-btn");
    const progressFill = win.querySelector(".progress-fill");
    const currentTimeEl = win.querySelector(".current-time");
    const durationTimeEl = win.querySelector(".duration-time");
    const disc = win.querySelector(".music-disc");
    let currentIndex = 0;
    let audio = new Audio(); // Plays original mp3, no edits
    windowEl._audio = audio; // Store for cleanup
    let isPlaying = false;
    let progressInterval = null;

    function loadSong(index) {
      const song = playlistData[index];
      audio.src = song.audioUrl;
      songTitleDisplay.textContent = song.title + " - " + song.artist;
      durationTimeEl.textContent = formatTime(song.duration);
      progressFill.style.width = "0%";
      currentTimeEl.textContent = "0:00";
      if (isPlaying) {
        audio.play();
        disc.classList.add("playing");
      } else {
        disc.classList.remove("playing");
      }
    }

    function playSong() {
      audio.play();
      isPlaying = true;
      playPauseBtn.textContent = "⏸";
      disc.classList.add("playing");
      progressInterval = setInterval(updateProgress, 500);
      windowEl._progressInterval = progressInterval; // Store for cleanup
    }

    function pauseSong() {
      audio.pause();
      isPlaying = false;
      playPauseBtn.textContent = "▶";
      disc.classList.remove("playing");
      clearInterval(progressInterval);
    }

    function updateProgress() {
      if (!audio.duration) return;
      const percent = (audio.currentTime / audio.duration) * 100;
      progressFill.style.width = percent + "%";
      currentTimeEl.textContent = formatTime(audio.currentTime);
    }

    function nextSong() {
      currentIndex = (currentIndex + 1) % playlistData.length;
      loadSong(currentIndex);
      if (isPlaying) playSong();
    }

    function prevSong() {
      currentIndex =
        (currentIndex - 1 + playlistData.length) % playlistData.length;
      loadSong(currentIndex);
      if (isPlaying) playSong();
    }

    playPauseBtn.onclick = () => {
      if (isPlaying) {
        pauseSong();
      } else {
        playSong();
      }
    };
    nextBtn.onclick = nextSong;
    prevBtn.onclick = prevSong;

    audio.onended = nextSong;

    playlistData.forEach((song, idx) => {
      const songEl = document.createElement("div");
      songEl.style.cssText = `
        padding: 0.8rem;
        margin-bottom: 0.5rem;
        margin-top: 10px;
        background: rgba(255, 20, 147, 0.1);
        border: 1px solid rgba(255, 20, 147, 0.3);
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s;

      `;
      songEl.innerHTML = `<strong>${song.title}</strong><br><small>${song.artist}</small>`;
      songEl.onmouseover = () => {
        songEl.style.background = "rgba(255, 20, 147, 0.2)";
      };
      songEl.onmouseout = () => {
        songEl.style.background = "rgba(255, 20, 147, 0.1)";
      };
      songEl.onclick = () => {
        currentIndex = idx;
        loadSong(currentIndex);
        playSong();
        playSound("click");
      };
      songsContainer.appendChild(songEl);
    });

    // Load first song by default
    loadSong(currentIndex);
  }

  openLettersWindow() {
    const letterText = `Hello Ayyih!\n\nHeto na naman ako sa letter ko na paulit ulit lang yung sinasabi HAHAHHAH pero gusto ko lang malaman mo naman sobrag mahal na mahal kita tho alam ko naman alam mo na HAHAHAH. Pasensiya na sa pang-aasar ko palagi, natutuwa lang talaga ako na napipikon kita at mas natutuwa pa ako kapag sinasabayan mo na pamimikon ko.\n\nSensiya na sa ugali ko, baka kase iniisip mo na sobrang immature ko ganon lang talaga ako na maingay, parang isip-bata kapag gusto ko lively lang yung interaction natin at hindi ka maboring para di mo ko iwan :(.\n\nKaya salamat sa walang sawang pag-intindi at hindi pagbitaw hehehe Iloveyouu, mahal kita lagi kahit naccringan ka sakin.\n\nHappy Valentines, more years to come hehehhee!`;
    showLetterModal(letterText);
  }

  openMemoriesWindow() {
    // Autoplay bg music (adie-tahanan.mp3)
    if (!this.memoriesAudio) {
      this.memoriesAudio = new Audio("assets/Adie - Tahanan (Lyrics).mp3");
      this.memoriesAudio.loop = true;
      this.memoriesAudio.volume = 0.5;
    }
    this.memoriesAudio
      .play()
      .catch((e) => console.log("Audio play blocked:", e));

    const template = document.getElementById("memoriesTemplate");
    const content = template.content.cloneNode(true);
    const wrapper = document.createElement("div");
    wrapper.appendChild(content);

    const win = this.windowManager.createWindow(
      "memories",
      "📸 Memories",
      wrapper,
    );
    // Stop bg music when window is closed
    const closeBtn = win.querySelector(".close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        if (this.memoriesAudio) {
          this.memoriesAudio.pause();
          this.memoriesAudio.currentTime = 0;
        }
      });
    }
    this.setupSlideshow(win);
  }

  setupSlideshow(win) {
    const images = [
      "slideshow-image/1e1ce984-88b8-4f88-8e20-11d787fd9194.jpg",
      "slideshow-image/30339b9b-46e1-406d-b341-f3d298305afb.jpg",
      "slideshow-image/338934c8-7565-4472-a17f-8563ae7776e1.jpg",
      "slideshow-image/3f542934-0bb9-4e42-b9f1-6b0d21507c80.jpg",
      "slideshow-image/407df8c5-8165-4b37-8c19-b0fcfe9a2287.jpg",
      "slideshow-image/6c466cb3-05d8-456c-a7e2-de5158b1cf9a.jpg",
      "slideshow-image/77dacc24-ae80-4e01-8157-a315d989da69.jpg",
      "slideshow-image/8804a930-0fdd-4a17-9358-ce6feb8e0e1c.jpg",
      "slideshow-image/944ef980-d935-4cb6-8ebe-52728be0e445.jpg",
      "slideshow-image/9dea903a-2808-4724-810c-b0b3b2127617.jpg",
      "slideshow-image/a52b1f76-8fb9-40ac-8e7e-05d27e6eb0f9.jpg",
      "slideshow-image/bc0ebc49-792f-4887-9454-de43ecc156ef.jpg",
      "slideshow-image/bc2161ea-d52c-4840-9cfd-bc309e152be1.jpg",
      "slideshow-image/d5becb08-5ce6-4e69-8dfe-ae2f6017eea5.jpg",
      "slideshow-image/dd010bf5-de48-45f5-b9e0-8f2975b8779d.jpg",
      "slideshow-image/e7a1c2e5-1034-4c14-8a08-030556a53b0b.jpg",
      "slideshow-image/ef18343c-175b-40d5-884a-49fa8e5d6744.jpg",
      "slideshow-image/f0db560f-1bba-4c99-ad97-e3f0846a65b7.jpg",
      "slideshow-image/f2bfac62-263e-423a-8574-af2fabc7b419.jpg",
      "slideshow-image/fb9f523f-15d4-4ac7-9e82-d719f9d8949c.jpg",
    ];

    let currentIndex = 0;
    let isPlaying = true;
    let slideInterval = null;

    const imgEl = win.querySelector(".slideshow-image");
    const counterEl = win.querySelector(".slideshow-counter");
    const prevBtn = win.querySelector(".prev-slide");
    const nextBtn = win.querySelector(".next-slide");
    const playPauseBtn = win.querySelector(".play-pause-slide");

    function updateSlide() {
      imgEl.style.opacity = 0;
      setTimeout(() => {
        imgEl.src = images[currentIndex];
        imgEl.style.opacity = 1;
        counterEl.textContent = `${currentIndex + 1} / ${images.length}`;
      }, 500);
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlide();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateSlide();
    }

    function togglePlay() {
      isPlaying = !isPlaying;
      playPauseBtn.textContent = isPlaying ? "⏸" : "▶";
      if (isPlaying) {
        startInterval();
      } else {
        clearInterval(slideInterval);
      }
    }

    function startInterval() {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 3000);
    }

    prevBtn.onclick = () => {
      prevSlide();
      if (isPlaying) startInterval();
    };

    nextBtn.onclick = () => {
      nextSlide();
      if (isPlaying) startInterval();
    };

    playPauseBtn.onclick = togglePlay;

    // Initial load
    imgEl.src = images[currentIndex];
    counterEl.textContent = `1 / ${images.length}`;
    startInterval();

    // Cleanup on window close
    const windowEl = win.closest(".window");
    const originalClose = windowEl.querySelector(".close-btn").onclick;
    windowEl.querySelector(".close-btn").onclick = () => {
      clearInterval(slideInterval);
      originalClose();
    };
  }

  setupTires() {
    document.querySelectorAll(".tire").forEach((tire) => {
      tire.onclick = () => {
        const id = tire.dataset.tire;
        const content = document.createElement("div");

        if (id === "1") {
          // Custom video player for Folder 1
          // Add background music
          if (!this.folder1Audio) {
            this.folder1Audio = new Audio(
              "assets/H.E.R. - Best Part (Lyrics) Ft. Daniel Caesar.mp3",
            );
            this.folder1Audio.loop = true;
            this.folder1Audio.volume = 0.5;
          }
          this.folder1Audio
            .play()
            .catch((e) => console.log("Audio play blocked:", e));
          content.innerHTML = `
            <div class=\"video-surprise-container\"> 
              <h2 class=\"video-title\">A Special Video Just for You 🎥</h2>
              <div class=\"video-player-ui\"> 
                <video id=\"surpriseVideo\" class=\"surprise-video\" src=\"assets/random video ko.mp4\" poster=\"assets/video-poster.jpg\" preload=\"auto\" loop autoplay playsinline></video>
                <div class=\"video-controls\">
                  <button class="play-btn">▶</button>
                  <button class="pause-btn" style="display:none;">⏸</button>
                  <input type="range" class="seek-bar" min="0" value="0" step="0.01">
                  <span class="current-time">0:00</span> / <span class="duration">0:00</span>
                  <button class="fullscreen-btn">⛶</button>
                </div>
              </div>
              <div class="video-message">Enjoy this video, made with love! 💖</div>
            </div>
            <style>
              .video-surprise-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                background: linear-gradient(135deg, #f8e1f4 60%, #e0c3fc 100%);
                border-radius: 18px;
                box-shadow: 0 8px 32px rgba(255, 20, 147, 0.15);
                padding: 2rem 1.5rem 1.5rem 1.5rem;
                min-width: 340px;
                max-width: 480px;
                margin: 0 auto;
              }
              .video-title {
                color: #c71585;
                font-family: 'Press Start 2P', cursive;
                font-size: 1.1rem;
                margin-bottom: 1rem;
                text-align: center;
              }
              .video-player-ui {
                width: 100%;
                background: #fff;
                border-radius: 12px;
                box-shadow: 0 2px 12px #ffb6d9;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;
              }
              .surprise-video {
                width: 100%;
                max-width: 400px;
                border-radius: 12px;
                margin-bottom: 0.7rem;
                background: #000;
              }
              .video-controls {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                width: 100%;
                justify-content: center;
              }
              .video-controls button {
                background: linear-gradient(135deg, #ffb6d9 60%, #dda0dd 100%);
                border: none;
                border-radius: 6px;
                color: #fff;
                font-size: 1.1rem;
                padding: 0.3rem 0.7rem;
                cursor: pointer;
                transition: background 0.2s;
              }
              .video-controls button:hover {
                background: linear-gradient(135deg, #c71585 60%, #ffb6d9 100%);
              }
              .seek-bar {
                flex: 1;
                accent-color: #ffb6d9;
                height: 4px;
                border-radius: 2px;
              }
              .volume-bar {
                width: 60px;
                accent-color: #ffb6d9;
              }
              .video-message {
                margin-top: 1.2rem;
                color: #c71585;
                font-size: 1rem;
                text-align: center;
                font-family: 'Press Start 2P', cursive;
              }
            </style>
          `;
          // Add interactive controls and force autoplay
          setTimeout(() => {
            const video = content.querySelector("#surpriseVideo");
            const playBtn = content.querySelector(".play-btn");
            const pauseBtn = content.querySelector(".pause-btn");
            const seekBar = content.querySelector(".seek-bar");
            const currentTimeEl = content.querySelector(".current-time");
            const durationEl = content.querySelector(".duration");
            const muteBtn = content.querySelector(".mute-btn");
            const volumeBar = content.querySelector(".volume-bar");
            const fullscreenBtn = content.querySelector(".fullscreen-btn");

            function formatTime(sec) {
              const m = Math.floor(sec / 60);
              const s = Math.floor(sec % 60);
              return `${m}:${s < 10 ? "0" : ""}${s}`;
            }

            video.onloadedmetadata = () => {
              seekBar.max = video.duration;
              durationEl.textContent = formatTime(video.duration);
            };
            video.ontimeupdate = () => {
              seekBar.value = video.currentTime;
              currentTimeEl.textContent = formatTime(video.currentTime);
            };
            seekBar.oninput = () => {
              video.currentTime = seekBar.value;
            };
            playBtn.onclick = () => {
              video.play();
              playBtn.style.display = "none";
              pauseBtn.style.display = "";
            };
            pauseBtn.onclick = () => {
              video.pause();
              playBtn.style.display = "";
              pauseBtn.style.display = "none";
            };
            video.onplay = () => {
              playBtn.style.display = "none";
              pauseBtn.style.display = "";
            };
            video.onpause = () => {
              playBtn.style.display = "";
              pauseBtn.style.display = "none";
            };
            if (muteBtn) {
              muteBtn.onclick = () => {
                video.muted = !video.muted;
                muteBtn.textContent = video.muted ? "🔇" : "🔊";
              };
            }
            if (volumeBar) {
              volumeBar.oninput = () => {
                video.volume = volumeBar.value;
              };
            }
            fullscreenBtn.onclick = () => {
              if (video.requestFullscreen) video.requestFullscreen();
              else if (video.webkitRequestFullscreen)
                video.webkitRequestFullscreen();
              else if (video.msRequestFullscreen) video.msRequestFullscreen();
            };
            // Force autoplay after DOM is ready
            setTimeout(() => {
              video.play().catch((e) => {
                // If blocked, try to show controls so user can interact
                playBtn.style.display = "";
                pauseBtn.style.display = "none";
              });
            }, 100);
          }, 0);
          const win = this.windowManager.createWindow(
            "folder1-video",
            "🎬 Special Video",
            content,
          );
          // Stop bg music when window is closed
          const closeBtn = win.querySelector(".close-btn");
          if (closeBtn) {
            closeBtn.addEventListener("click", () => {
              if (this.folder1Audio) {
                this.folder1Audio.pause();
                this.folder1Audio.currentTime = 0;
              }
            });
          }
        } else if (id === "2") {
          this.openLettersWindow();
        } else if (id === "3") {
          content.innerHTML =
            "<h2>FLOWERS FOR U MADAM</h2><img src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3Z0YmR1eTd0cnA3ZTdidmo4bDJuYm52NzB5ajJyaXdwNTVrbDd2MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dFYPRY6u3YnajI1jP3/giphy.gif' style='width:100%; border-radius:10px; margin-top:10px;'>";
          this.windowManager.createWindow("flowers", "🌹 Flowers", content);
        } else if (id === "4") {
          this.gamesSystem.create();
        }
      };
    });
  }

  setupHotWheels() {
    // Setup hot wheels UI interactions
  }

  startGame() {
    document.getElementById("landingPage").classList.add("hidden");
    const loadingScreen = document.getElementById("loadingScreen");
    const loadingProgress = loadingScreen.querySelector(".loading-progress");
    loadingScreen.classList.remove("hidden");
    loadingProgress.style.width = "0%";
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 18 + 7; // randomize for effect
      if (progress > 100) progress = 100;
      loadingProgress.style.width = progress + "%";
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          loadingScreen.classList.add("hidden");
          document.getElementById("desktopSystem").classList.remove("hidden");
        }, 400);
      }
    }, 350);
  }
}

function showFinalSurprise() {
  const surprise = document.getElementById("finalSurprise");
  surprise.classList.remove("hidden");
  surprise.style.zIndex = 9999;
  surprise.querySelector(".replay-btn").onclick = () => location.reload();
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  new LoveSystem().init();
});

// Create starfield
function createStarfield() {
  const starfield = document.querySelector(".starfield");
  if (!starfield) return;

  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.style.cssText = `
      position: absolute;
      width: ${Math.random() * 2 + 1}px;
      height: ${Math.random() * 2 + 1}px;
      background: white;
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      opacity: ${Math.random() * 0.7 + 0.3};
      animation: twinkle ${Math.random() * 3 + 2}s infinite;
    `;
    starfield.appendChild(star);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  createStarfield();
});

// Floating Circles and Hearts Animation
window.addEventListener("DOMContentLoaded", () => {
  const landing = document.getElementById("landingPage");
  const circlesContainer = document.querySelector(".floating-circles");
  if (landing && circlesContainer) {
    for (let i = 0; i < 12; i++) {
      const circle = document.createElement("div");
      circle.className = "circle";
      const size = Math.random() * 60 + 40;
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      circle.style.left = `${Math.random() * 100}%`;
      circle.style.bottom = `-${Math.random() * 20 + 10}px`;
      circle.style.animationDelay = `${Math.random() * 8}s`;
      circlesContainer.appendChild(circle);
    }
  }

  const hearts = document.querySelectorAll(".floating-hearts .heart");
  hearts.forEach((heart, i) => {
    heart.style.animationDelay = `${i * 0.7}s`;
  });
});
