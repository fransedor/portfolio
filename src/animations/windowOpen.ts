const windowOpenAnimation = () => {
  const startButton = document.getElementById("start-button") as HTMLButtonElement;
  const divisor = document.getElementById("divisor") as HTMLDivElement;

  startButton.style.opacity = "0";
  startButton.style.transition = "opacity 0.5s";
  divisor.classList.add("divisor-animate");
};

export default windowOpenAnimation;
