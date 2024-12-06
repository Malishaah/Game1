document.addEventListener('DOMContentLoaded', () => {
    const video = document.createElement('video');
    video.src = '/videos/Star.mp4';
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.id = 'background-video';
    document.body.prepend(video);
});

 const music = new Audio('/sounds/story-music.wav');
    music.loop = true;

    const toggleMusicButton = document.getElementById('toggle-music-button');
    let isMusicPlaying = false;

    if (toggleMusicButton) {
        toggleMusicButton.addEventListener('click', () => {
            if (isMusicPlaying) {
                music.pause();
                toggleMusicButton.textContent = '🎵'; 
            } else {
                music.play().then(() => {
                    toggleMusicButton.textContent = '🔇'; 
                }).catch((error) => {
                    console.error('Kunde inte spela musik:', error);
                    alert('Musiken kunde inte spelas upp. Var god och kontrollera inställningarna.');
                });
            }
            isMusicPlaying = !isMusicPlaying;
        });
    } else {
        console.error('Kan inte hitta musikknappen i DOM:en.');
    }

document.addEventListener('DOMContentLoaded', () => {
    const gameImage = document.getElementById('game-image');
    gameImage.addEventListener('click', () => {
        gameImage.style.transform = 'scale(1.1)';
        setTimeout(() => {
            gameImage.style.transform = 'scale(1)';
        }, 300);
    });
});

//second page
  const settingsButton = document.querySelector('.settings-button');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  settingsButton.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.menu-container')) {
      dropdownMenu.style.display = 'none';
    }
  });