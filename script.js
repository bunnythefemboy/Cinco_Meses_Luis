const letterButton = document.querySelector("#openLetter");
const letterContent = document.querySelector("#letterContent");
const letterButtonText = document.querySelector("#letterButtonText");

letterButton.addEventListener("click", () => {
  const opening = letterContent.hidden;
  letterContent.hidden = !opening;
  letterButton.setAttribute("aria-expanded", String(opening));
  letterButtonText.textContent = opening ? "Cerrar la carta por ahora" : "Toca para abrir tu carta";
  if (opening) {
    window.setTimeout(() => letterContent.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }
});

const surpriseButton = document.querySelector("#surpriseButton");
const surpriseMessage = document.querySelector("#surpriseMessage");
surpriseButton.addEventListener("click", () => {
  surpriseMessage.hidden = !surpriseMessage.hidden;
  surpriseButton.textContent = surpriseMessage.hidden ? "Un último mensajito ✨" : "Guardar este mensajito en el corazón ♡";
});

const music = document.querySelector("#backgroundMusic");
const musicToggle = document.querySelector("#musicToggle");
const musicLabel = document.querySelector("#musicLabel");
const musicIcon = document.querySelector("#musicIcon");
let musicEnabled = false;

musicToggle.addEventListener("click", async () => {
  // Los navegadores requieren una interacción del usuario antes de reproducir audio.
  const sourceExists = music.querySelector("source") || music.currentSrc;
  if (!sourceExists) {
    musicLabel.textContent = "Añade music.mp3";
    musicToggle.setAttribute("aria-pressed", "false");
    return;
  }
  try {
    if (!musicEnabled) {
      await music.play();
      musicEnabled = true;
      musicLabel.textContent = "Música: encendida";
      musicIcon.textContent = "♫";
      musicToggle.setAttribute("aria-pressed", "true");
    } else {
      music.pause();
      musicEnabled = false;
      musicLabel.textContent = "Música: apagada";
      musicIcon.textContent = "♫";
      musicToggle.setAttribute("aria-pressed", "false");
    }
  } catch (error) {
    musicLabel.textContent = "No se pudo reproducir";
  }
});

// Corazones decorativos discretos, sin depender de imágenes externas.
const sparkleField = document.querySelector(".sparkle-field");
const symbols = ["♡", "✧", "·"];
for (let i = 0; i < 18; i++) {
  const item = document.createElement("span");
  item.className = "background-sparkle";
  item.textContent = symbols[i % symbols.length];
  item.style.left = `${(i * 37 + 11) % 100}%`;
  item.style.top = `${(i * 53 + 7) % 100}%`;
  item.style.animationDelay = `${(i % 7) * -0.7}s`;
  sparkleField.appendChild(item);
}
