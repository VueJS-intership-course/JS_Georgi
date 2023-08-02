const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
    });
});

const lastCardObserver = new IntersectionObserver(entries => {
    const lastCard = entries[0];
    if (!lastCard.isIntersecting) return;
    loadNewCards();
    lastCardObserver.unobserve(lastCard.target);
    lastCardObserver.observe(cardContainer.lastElementChild);
}, {
    threshold: 0.5
});

lastCardObserver.observe(cardContainer.lastElementChild);

cards.forEach(card => {
    observer.observe(card);
});

function loadNewCards() {
    for (let i = 0; i < 5; i++) {
        const card = document.createElement('div');
        card.textContent = "This is a Card";
        card.classList.add("card");
        observer.observe(card);
        cardContainer.append(card);
    }
}
