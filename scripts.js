document.addEventListener('DOMContentLoaded', () => {
    // Example GSAP animation for the main content header
    gsap.from("header", { duration: 1.5, y: -100, opacity: 0, ease: "bounce" });

    // Example GSAP animation for the photo gallery
    gsap.from(".gallery img", {
        duration: 1,
        scale: 0.5,
        opacity: 0,
        stagger: 0.2,
        ease: "elastic",
        force3D: true
    });

    // Example GSAP animation for the messages
    gsap.from(".message", {
        duration: 1,
        x: -200,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.inOut"
    });

    // Handle the transition from the welcome page to the main content
    const enterButton = document.getElementById('enter-site');
    const welcomePage = document.getElementById('welcome-page');
    const mainContent = document.getElementById('main-content');

    enterButton.addEventListener('click', () => {
        gsap.to(welcomePage, { duration: 1, opacity: 0, onComplete: () => {
            welcomePage.style.display = 'none';
            mainContent.style.display = 'block';
            gsap.from(mainContent, { duration: 1, opacity: 0 });
        }});
    });
});