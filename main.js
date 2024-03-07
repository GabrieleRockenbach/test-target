const cardsContainer = document.getElementById("cards-container");

const cardContent = [
	{
		title: "Teste 2: Sequência Fibonacci",
		image: "./assets/teste-2.jpg",
		leftButtonAnchor: "/Teste_2/index.html",
		rightButtonAnchor:
			"https://github.com/GabrieleRockenbach/test-target/blob/main/Teste_2/fibonacci.js",
	},
	{
		title: "Teste 5: Palavra Reversa",
		image: "./assets/teste-5.jpg",
		leftButtonAnchor: "/Teste_5/index.html",
		rightButtonAnchor:
			"https://github.com/GabrieleRockenbach/test-target/blob/main/Teste_5/reverse-function.js",
	},
];

function scrollToSection(section) {
	const targetSection = document.getElementById(section);
	targetSection.scrollIntoView({ behavior: "smooth" });
}

function showCards() {
	cardContent.forEach((element) => {
		const card = document.createElement("div");

		const cardTitle = document.createElement("h2");
		cardTitle.textContent = element.title;

		const cardImage = document.createElement("img");
		cardImage.setAttribute("src", element.image);

		const buttonContainer = document.createElement("div");

		const cardLeftButton = document.createElement("a");
		cardLeftButton.textContent = "Testar";
		cardLeftButton.setAttribute("href", element.leftButtonAnchor);
		cardLeftButton.setAttribute("target", "_blank");
		cardLeftButton.style.cursor = 'pointer';

		const cardRightButton = document.createElement("a");
		cardRightButton.textContent = "Ver Código";
		cardRightButton.setAttribute("href", element.rightButtonAnchor);
		cardRightButton.setAttribute("target", "_blank");
		cardRightButton.style.cursor = 'pointer';

		buttonContainer.appendChild(cardLeftButton);
		buttonContainer.appendChild(cardRightButton);

		card.appendChild(cardTitle);
		card.appendChild(cardImage);
		card.appendChild(buttonContainer);

		cardsContainer.appendChild(card);
	});
}

showCards();