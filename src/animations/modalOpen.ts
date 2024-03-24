export const modalOpenAnimation = () => {
  const dividers = document.querySelector(".invisible-modal");

  dividers?.classList.add("invisible-modal-animated");
  for (let i = 0; i < (dividers?.children.length || 0); i++) {
		dividers?.children[i].classList.add("animate-height")
	}
};

export const removeModalOpenAnimation = () => {
  const dividers = document.querySelector(".invisible-modal");

  dividers?.classList.remove("invisible-modal-animated");
	for (let i = 0; i < (dividers?.children.length || 0); i++) {
		dividers?.children[i].classList.remove("animate-height")
	}
};
