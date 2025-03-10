
document.addEventListener("DOMContentLoaded", function () {

    const controller = document.querySelector("#controller");
    controller.addEventListener("submit", async (event) => {
        event.preventDefault();
        controller.setAttribute("disable", true);
        const prompt = document.querySelector("#prompt").value;
        const model = document.querySelector("#model").value;
        // alert(`${prompt} ${model}`);

        const response = await fetch(`./api?prompt=${prompt}&model=${model}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        const json = await response.json();
        document.querySelector("#response").textContent = json.content;
    })



    const observerOptions = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
            }
        });
    }, observerOptions);

    document.querySelectorAll(".fade-in").forEach((element) => {
        observer.observe(element);
    });
});