document.getElementById("cuteButton").addEventListener("click", function() {
    createHeart();
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

function redirectToPage(choice) {
    switch (choice) {
        case 'heart':
            window.location.href = "heart.html";
            break;
        case 'cookie':
            window.location.href = "cookie.html";
            break;
        case 'smile':
            window.location.href = "smile.html";
            break;
        default:
            break;
    }
}
