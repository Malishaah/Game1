document.addEventListener('DOMContentLoaded', () => {
    const gameImage = document.getElementById('game-image');
    
    // Exempel på att lägga till en enkel animation
    gameImage.addEventListener('click', () => {
        gameImage.style.transform = 'scale(1.1)';
        setTimeout(() => {
            gameImage.style.transform = 'scale(1)';
        }, 300);
    });
});
