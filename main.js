//Import pour le fonctionnement du jeu



// Page d'accueil

let buttonPlay = document.querySelector(".buttonPlay");
let buttonCredits = document.querySelector(".buttonCredits");
let buttonRules = document.querySelector(".buttonRules");
let homepage = document.querySelector(".homepage");

buttonPlay.addEventListener("click", () => {
    homepage.style.display = "none";
    heroChoice.style.display = "block";
    audioPlayer.style.display = "none";
  });
  
buttonCredits.addEventListener("click", () => {
    homepage.style.display = "none";
    credits.style.display = "block";
    audioPlayer.style.display = "none";
});
  
buttonRules.addEventListener("click", () => {
    homepage.style.display = "none";
    rules.style.display = "block";
    audioPlayer.style.display = "none";
});

// Page des crédits

let credits = document.querySelector(".credits");
let creditsBackButton = document.querySelector(".CreditsBackButton");

creditsBackButton.addEventListener("click", () =>{
    homepage.style.display = "block";
    credits.style.display = "none";
});

// Page des règles

let rules = document.querySelector(".rules");
let rulesBackButton = document.querySelector(".RulesBackButton");

rulesBackButton.addEventListener("click", () =>{
    homepage.style.display = "block";
    rules.style.display = "none";
});

//Boutton pour appeler le lecter audio

let audioButton = document.querySelector(".buttonAudio");
let audioPlayer = document.querySelector(".audio");

audioButton.addEventListener("click", () =>{
    if (audioPlayer.style.display == "block"){
        audioPlayer.style.display = "none";
    }else{
        audioPlayer.style.display = "block";
    }
});

//Page de l'Histoire

let enterDungeonButton = document.querySelector(".buttonEnterDungeon");
let storyPage = document.querySelector(".story");

enterDungeonButton.addEventListener("click", () =>{
    storyPage.style.display = "none";
    gamePage.style.display = "block";
});

// Page de sélection du personnage

let heroChoice = document.querySelector(".heroChoice");
let heroChoiceBackButton = document.querySelector(".HeroChoiceBackButton");

heroChoiceBackButton.addEventListener("click", () =>{
    homepage.style.display = "block";
    heroChoice.style.display = "none";
});

let hero1 = document.querySelector(".hero1");
let hero2 = document.querySelector(".hero2");
let hero3 = document.querySelector(".hero3");
let hero4 = document.querySelector(".hero4");

hero1.addEventListener("click", () =>{
    storyPage.style.display = "block";
    heroChoice.style.display = "none";
});

hero2.addEventListener("click", () =>{
    storyPage.style.display = "block";
    heroChoice.style.display = "none";
});

hero3.addEventListener("click", () =>{
    storyPage.style.display = "block";
    heroChoice.style.display = "none";
    hero.style.display = "block";
});

hero4.addEventListener("click", () =>{
    storyPage.style.display = "block";
    heroChoice.style.display = "none";
});

// Page du Jeu

let gamePage = document.querySelector(".gamePage");
let gamePageBackButton = document.querySelector(".GamePageBackButton");
let hero = document.querySelector(".hero");

gamePageBackButton.addEventListener("click", () =>{
    homepage.style.display = "block";
    gamePage.style.display = "none";
    hero.style.display = "none";
});
