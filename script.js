
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');
    const tyre = document.getElementById('tyre');
    const logo = document.getElementById('logo');

    
    Promise.all([
        new Promise(resolve => tyre.addEventListener('animationend', resolve)),
        new Promise(resolve => logo.addEventListener('animationend', resolve))
    ]).then(() => {
        
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease-out';
        
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'block';
        }, 500);
    });
});


setTimeout(() => {
  window.location.href = "carSlide.html";
}, 5000); 

document.addEventListener('DOMContentLoaded', function() {
    const redCar = document.getElementById('redCar');
    const blackCar = document.getElementById('blackCar');

    // Initial animation to bring red car to center
    setTimeout(() => {
        redCar.style.transform = 'translateX(0)';
    }, 500);

    // Car switching functionality
    redCar.addEventListener('click', function() {
        // Move red car off screen to the right
        redCar.style.transform = 'translateX(150%)';
        redCar.style.opacity = '0';

        // After a short delay, move black car from left to center
        setTimeout(() => {
            blackCar.style.opacity = '1';
            blackCar.style.transform = 'translateX(0)';
        }, 500); // Match the transition duration
    });

    blackCar.addEventListener('click', function() {
        // Move black car off screen to the left
        blackCar.style.transform = 'translateX(-150%)';
        blackCar.style.opacity = '0';

        // After a short delay, move red car from left to center
        setTimeout(() => {
            redCar.style.opacity = '1';
            redCar.style.transform = 'translateX(0)';
        }, 500); // Match the transition duration
    });
});
