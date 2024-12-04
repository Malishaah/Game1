document.addEventListener('DOMContentLoaded', () => {
    const video = document.createElement('video');
    video.src = '/videos/Star.mp4';
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.id = 'background-video';
    document.body.prepend(video);
});

document.addEventListener('DOMContentLoaded', () => {
    const gameImage = document.getElementById('game-image');
    gameImage.addEventListener('click', () => {
        gameImage.style.transform = 'scale(1.1)';
        setTimeout(() => {
            gameImage.style.transform = 'scale(1)';
        }, 300);
    });
});

