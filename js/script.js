const list = document.querySelector(".game-list");
const cards = [...document.querySelectorAll(".game-list button")];

cards.forEach((card, index) => {
    card.addEventListener("focus", () => {
        const isFirst = index === 0;
        const isLast = index === cards.length - 1;

        if (isLast) {
            list.scrollTo({
                left: list.scrollWidth - list.clientWidth,
                behavior: "smooth",
            });
            return;
        }

        if (isFirst) {
            list.scrollTo({
                left: 0,
                behavior: "smooth",
            });
            return;
        }

        card.scrollIntoView({
            behavior: "smooth",
            inline: "nearest",
            block: "nearest",
        });
    });
});
