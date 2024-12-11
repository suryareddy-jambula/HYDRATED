document.addEventListener("DOMContentLoaded", () => {
    const splashScreen = document.querySelector('.splash-screen');
    const splashVideo = document.querySelector('.splash-video');

    // Listen for the `timeupdate` event to track playback time
    splashVideo.addEventListener('timeupdate', () => {
        if (splashVideo.currentTime >= 4) { // Check if 3 seconds have passed
            splashScreen.classList.add('hidden'); // Start fading out the splash screen
            setTimeout(() => {
                splashScreen.style.display = 'none'; // Remove splash screen after fade-out
            }, 1000); // Match the CSS transition duration
        }
    });

    // Prevent user interaction during splash screen
    splashScreen.addEventListener('click', (e) => e.preventDefault());
});
document.addEventListener("DOMContentLoaded", () => {
    const splashScreen = document.querySelector('.splash-screen');
    const splashVideo = document.querySelector('.splash-video');

    // Check if the splash video has been played in this session
    const hasPlayed = sessionStorage.getItem('splashPlayed');

    if (hasPlayed) {
        // If already played in this session, skip the splash screen
        splashScreen.style.display = 'none';
    } else {
        // Play the splash video and mark it as played
        splashVideo.play();

        splashVideo.addEventListener('timeupdate', () => {
            if (splashVideo.currentTime >= 3) {
                splashScreen.classList.add('hidden'); // Fade out the splash screen
                setTimeout(() => {
                    splashScreen.style.display = 'none';
                    sessionStorage.setItem('splashPlayed', 'true'); // Mark splash as played for the session
                }, 1000); // Match the CSS transition duration
            }
        });
    }
});


function toggleMenu() {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('open');
}
