document.addEventListener("keyup", function (e) {
    if (e.key === "Escape") {
        const backBtn = document.getElementById("back-btn");

        if (backBtn && backBtn.href) {
            window.location.href = backBtn.href;
        }
    }
});
