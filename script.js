document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtn = document.querySelector(".read-more-btn");
    const readMoreContent = document.querySelector(".read-more-content");

    readMoreBtn.addEventListener("click", function () {
        if (readMoreContent.style.display === "none") {
            readMoreContent.style.display = "block";
            readMoreBtn.textContent = "Read Less";
        } else {
            readMoreContent.style.display = "none";
            readMoreBtn.textContent = "Read More";
        }
    });
});