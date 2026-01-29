const list = document.querySelector(".game-list");
const cards = [...document.querySelectorAll(".game-list button")];

cards.forEach((card, index) => {
    card.addEventListener("focus", () => {
        const isFirst = index === 0;
        const isLast = index === cards.length - 1;

        if (isLast) {
            // scroll all the way right
            list.scrollTo({
                left: list.scrollWidth - list.clientWidth,
                behavior: "smooth",
            });
            return;
        }

        if (isFirst) {
            // optional: scroll all the way left
            list.scrollTo({
                left: 0,
                behavior: "smooth",
            });
            return;
        }

        // default behavior for middle items
        card.scrollIntoView({
            behavior: "smooth",
            inline: "nearest",
            block: "nearest",
        });
    });
});

document.addEventListener("keyup", function (e) {
    // Use 'e.key === "Escape"' for modern browsers, or fall back to 'e.keyCode === 27'
    if (e.key === "Escape" || e.keyCode === 27) {
        history.back(); // Equivalent to history.go(-1)
    }
});
