const title = document.getElementById("title");
const storyTitle = document.getElementById('textheader');
const storyText = document.getElementById('textmain');
const choicesContainer = document.getElementById("choices");
const playerNameInput = document.getElementById("player-name");
const gameStartContainer = document.getElementById("game-start-container");
const gameContainer = document.getElementById("game-container");
const settingsButton = document.querySelector('.settings-button');
const dropdownMenu = document.querySelector('.dropdown-menu');
const video = document.createElement('video');
const startbutton = document.querySelector('.start-button');
const imageContainer = document.getElementById('image-container')

//video bakgrund
document.addEventListener('DOMContentLoaded', () => {
    video.src = '/videos/Star.mp4';
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.id = 'background-video';
    document.body.prepend(video);
    gameContainer.style.display='none'
    dropdownMenu.style.display='none'
    const savedName = localStorage.getItem("playerName");
    if (savedName) {
      playerNameInput.style.display='none';
      playerNameInput.value=savedName;
      startbutton.text="Fortsätt"
    }
});

const story = {
    1: {
      title: "Början av resan",
      img:"/images/img1.jpg",
      text: "Det var en gång en flicka vid namn Askungen, som levde lyckligt med sin mamma och pappa. Men när hennes mamma gick bort och hennes pappa gifte om sig, förändrades allt. Styvmodern och styvsystrarna behandlade henne som en tjänare.",
      choices: [{ text: "Fortsätt", next: 2 }]
    },
    2: {
      title: "Magin börjar",
      img:"/images/img2.jpg",
      text: "När kungen bjöd in alla i riket till en bal, önskade Askungen att hon kunde gå. Hennes mors magiska träd gav henne en vacker klänning och skor, och hon gick till balen där prinsen bara hade ögon för henne.",
      choices: [{ text: "Fortsätt", next: 3 }]
    },
    3: {
      title: "Ett svårt val",
      img:"/images/img3.jpg",
      text: "Vid midnatt måste Askungen fly. Hennes sko fastnar i trappan. Vad ska hon göra?",
      choices: [
        { text: "Lämna skon", next: 4 },
        { text: "Ta skon", next: 5 }
      ]
    },
    4: {
      title: "Lyckligt slut",
      img:"/images/img5a.jpg",
      text: "Prinsen reste genom riket och hittade Askungen. När hon satte på sig skon, förstod prinsen att hon var flickan han dansat med. De gifte sig och levde lyckliga i alla sina dagar.",
      choices: [{ text: "Börja om", next: 1 }]
    },
    5: {
      title: "Ett liv i sorg",
      img:"/images/img5b.jpg",
      text: "Askungen tog skon och återvände till sitt liv som tjänare. Hon drömde om ett bättre liv, men förlorade sin chans att bli fri.",
      choices: [{ text: "Börja om", next: 1 }]
    }
  };

  // Render story
  function renderStory(storyId) {
    const currentStory = story[storyId];
    localStorage.setItem("currentStory", storyId); // Save progress
    storyTitle.textContent = currentStory.title;
    storyText.textContent = currentStory.text;
    choicesContainer.innerHTML = ""; // Clear old buttons
    
    currentStory.choices.forEach(choice => {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.onclick = () => {
        if (choice.action) {
          choice.action(); // Kör action om den finns
        } else {
        renderStory(choice.next);
      } 
    };
      choicesContainer.appendChild(button);
    });
  }
  
//musik
 const music = new Audio('/musics/story-music.wav');
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
  settingsButton.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', (event) => {
    if(event.target.id === 'start-button') {
        const playerName = playerNameInput.value.trim();
        if (!playerName) {
          alert("Skriv ditt namn för att börja!");
          return;
        }
        gameContainer.style.display='block'
        gameStartContainer.style.display='none'
        localStorage.setItem("playerName", playerName); // Save player name
        title.textContent = `Välkommen, ${playerName}!`;
       title.style.display='block'
        // Load saved progress or start from the beginning
        const savedStory = localStorage.getItem("currentStory");
        renderStory(savedStory ? parseInt(savedStory, 10) : 1);
    }
    if(event.target.id==='startover')
      {
          title.style.display='none'
          localStorage.removeItem("currentStory");
          localStorage.removeItem("playerName")
          playerNameInput.value='';
          gameContainer.style.display='none'
          gameStartContainer.style.display='block'
          playerNameInput.style.display='inline-block';
          startbutton.text="Börja och spela"
      }

      