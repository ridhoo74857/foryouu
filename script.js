document.addEventListener("DOMContentLoaded", () => {
    const events = document.querySelectorAll(".event");

    const revealEvents = () => {
        const triggerHeight = window.innerHeight * 0.8;

        events.forEach((event) => {
            const eventTop = event.getBoundingClientRect().top;

            if (eventTop < triggerHeight) {
                event.style.transform = "translateX(0)";
                event.style.opacity = "1";
            }
        });
    };

    window.addEventListener("scroll", revealEvents);
    revealEvents(); // Trigger on load in case elements are already in view
});