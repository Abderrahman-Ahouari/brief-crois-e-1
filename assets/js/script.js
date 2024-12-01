const players = [
    
        {
          "name": "Lionel Messi",
          "photo": "https://cdn.sofifa.net/players/158/023/25_120.png",
          "position": "RW",
          "nationality": "Argentina",
          "flag": "https://cdn.sofifa.net/flags/ar.png",
          "club": "Inter Miami",
          "logo": "https://cdn.sofifa.net/meta/team/239235/120.png",
          "rating": 93,
          "pace": 85,
          "shooting": 92,
          "passing": 91,
          "dribbling": 95,
          "defending": 35,
          "physical": 65
        },
        {
          "name": "Cristiano Ronaldo",
          "photo": "https://cdn.sofifa.net/players/020/801/25_120.png",
          "position": "ST",
          "nationality": "Portugal",
          "flag": "https://cdn.sofifa.net/flags/pt.png",
          "club": "Al Nassr",
          "logo": "https://cdn.sofifa.net/meta/team/2506/120.png",
          "rating": 91,
          "pace": 84,
          "shooting": 94,
          "passing": 82,
          "dribbling": 87,
          "defending": 34,
          "physical": 77
        },
        {
          "name": "Kevin De Bruyne",
          "photo": "https://cdn.sofifa.net/players/192/985/25_120.png",
          "position": "CM",
          "nationality": "Belgium",
          "flag": "https://cdn.sofifa.net/flags/be.png",
          "club": "Manchester City",
          "logo": "https://cdn.sofifa.net/players/239/085/25_120.png",
          "rating": 91,
          "pace": 74,
          "shooting": 86,
          "passing": 93,
          "dribbling": 88,
          "defending": 64,
          "physical": 78
        },
        {
          "name": "Kylian Mbappé",
          "photo": "https://cdn.sofifa.net/players/231/747/25_120.png",
          "position": "ST",
          "nationality": "France",
          "flag": "https://cdn.sofifa.net/flags/fr.png",
          "club": "Real Madrid",
          "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
          "rating": 92,
          "pace": 97,
          "shooting": 89,
          "passing": 80,
          "dribbling": 92,
          "defending": 39,
          "physical": 77
        },
        {
          "name": "Virgil van Dijk",
          "photo": "https://cdn.sofifa.net/players/203/376/25_120.png",
          "position": "CB",
          "nationality": "Netherlands",
          "flag": "https://cdn.sofifa.net/flags/nl.png",
          "club": "Liverpool",
          "logo": "https://cdn.sofifa.net/meta/team/8/120.png",
          "rating": 90,
          "pace": 75,
          "shooting": 60,
          "passing": 70,
          "dribbling": 72,
          "defending": 92,
          "physical": 86
        },
        {
          "name": "Antonio Rudiger",
          "photo": "https://cdn.sofifa.net/players/205/452/25_120.png",
          "position": "CB",
          "nationality": "Germany",
          "flag": "https://cdn.sofifa.net/flags/de.png",
          "club": "Real Madrid",
          "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
          "rating": 88,
          "pace": 82,
          "shooting": 55,
          "passing": 73,
          "dribbling": 70,
          "defending": 86,
          "physical": 86
        },
        {
          "name": "Neymar Jr",
          "photo": "https://cdn.sofifa.net/players/190/871/25_120.png",
          "position": "LW",
          "nationality": "Brazil",
          "flag": "https://cdn.sofifa.net/flags/br.png",
          "club": "Al-Hilal",
          "logo": "https://cdn.sofifa.net/meta/team/7011/120.png",
          "rating": 90,
          "pace": 91,
          "shooting": 83,
          "passing": 86,
          "dribbling": 94,
          "defending": 37,
          "physical": 61
        },
        {
          "name": "Mohamed Salah",
          "photo": "https://cdn.sofifa.net/players/192/985/25_120.png",
          "position": "RW",
          "nationality": "Egypt",
          "flag": "https://cdn.sofifa.net/flags/eg.png",
          "club": "Liverpool",
          "logo": "https://cdn.sofifa.net/meta/team/8/120.png",
          "rating": 89,
          "pace": 93,
          "shooting": 87,
          "passing": 81,
          "dribbling": 90,
          "defending": 45,
          "physical": 75
        },
        {
          "name": "Joshua Kimmich",
          "photo": "https://cdn.sofifa.net/players/212/622/25_120.png",
          "position": "CM",
          "nationality": "Germany",
          "flag": "https://cdn.sofifa.net/flags/de.png",
          "club": "Bayern Munich",
          "logo": "https://cdn.sofifa.net/meta/team/503/120.png",
          "rating": 89,
          "pace": 70,
          "shooting": 75,
          "passing": 88,
          "dribbling": 84,
          "defending": 84,
          "physical": 81
        },
        {
          "name": "Jan Oblak",
          "photo": "https://cdn.sofifa.net/players/200/389/25_120.png",
          "position": "GK",
          "nationality": "Slovenia",
          "flag": "https://cdn.sofifa.net/flags/si.png",
          "club": "Atletico Madrid",
          "logo": "https://cdn.sofifa.net/meta/team/7980/120.png",
          "rating": 91,
          "diving": 89,
          "handling": 90,
          "kicking": 78,
          "reflexes": 92,
          "speed": 50,
          "positioning": 88
        },
        {
          "name": "Luka Modrić",
          "photo": "https://cdn.sofifa.net/players/177/003/25_120.png",
          "position": "CM",
          "nationality": "Croatia",
          "flag": "https://cdn.sofifa.net/flags/hr.png",
          "club": "Real Madrid",
          "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
          "rating": 88,
          "pace": 74,
          "shooting": 78,
          "passing": 89,
          "dribbling": 90,
          "defending": 72,
          "physical": 65
        },
        {
          "name": "Vinicius Junior",
          "photo": "https://cdn.sofifa.net/players/238/794/25_120.png",
          "position": "LW",
          "nationality": "Brazil",
          "flag": "https://cdn.sofifa.net/flags/br.png",
          "club": "Real Madrid",
          "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
          "rating": 89,
          "pace": 91,
          "shooting": 88,
          "passing": 85,
          "dribbling": 94,
          "defending": 39,
          "physical": 61
        },
        {
          "name": "Brahim Diáz",
          "photo": "https://cdn.sofifa.net/players/231/410/25_120.png",
          "position": "LW",
          "nationality": "Morocco",
          "flag": "https://cdn.sofifa.net/flags/ma.png",
          "club": "Real Madrid",
          "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
          "rating": 82,
          "pace": 85,
          "shooting": 74,
          "passing": 78,
          "dribbling": 85,
          "defending": 31,
          "physical": 56
        },
        {
          "name": "Karim Benzema",
          "photo": "https://cdn.sofifa.net/players/165/153/25_120.png",
          "position": "ST",
          "nationality": "France",
          "flag": "https://cdn.sofifa.net/flags/fr.png",
          "club": "Al-Ittihad",
          "logo" :"https://cdn.sofifa.net/meta/team/476/120.png",
          "rating": 90,
          "pace": 77,
          "shooting": 90,
          "passing": 83,
          "dribbling": 88,
          "defending": 40,
          "physical": 78
        },
        {
          "name": "Erling Haaland",
          "photo": "https://cdn.sofifa.net/players/239/085/25_120.png",
          "position": "ST",
          "nationality": "Norway",
          "flag": "https://cdn.sofifa.net/flags/no.png",
          "club": "Manchester City",
          "logo": "https://cdn.sofifa.net/players/239/085/25_120.png",
          "rating": 91,
          "pace": 89,
          "shooting": 94,
          "passing": 65,
          "dribbling": 80,
          "defending": 45,
          "physical": 88
        },
        {
          "name": "N'Golo Kanté",
          "photo": "https://cdn.sofifa.net/players/215/914/25_120.png",
          "position": "CDM",
          "nationality": "France",
          "flag": "https://cdn.sofifa.net/flags/fr.png",
          "club": "Al-Ittihad",
          "logo": "https://cdn.sofifa.net/meta/team/476/120.png",
          "rating": 87,
          "pace": 77,
          "shooting": 66,
          "passing": 75,
          "dribbling": 82,
          "defending": 88,
          "physical": 82
        },
        {
          "name": "Alphonso Davies",
          "photo": "https://cdn.sofifa.net/players/234/396/25_120.png",
          "position": "LB",
          "nationality": "Canada",
          "flag": "https://cdn.sofifa.net/flags/ca.png",
          "club": "Bayern Munich",
          "logo": "https://cdn.sofifa.net/meta/team/503/120.png",
          "rating": 84,
          "pace": 96,
          "shooting": 68,
          "passing": 77,
          "dribbling": 82,
          "defending": 76,
          "physical": 77
        },
        {
          "name": "Yassine Bounou",
          "photo": "https://cdn.sofifa.net/players/209/981/25_120.png",
          "position": "GK",
          "nationality": "Morocco",
          "flag": "https://cdn.sofifa.net/flags/ma.png",
          "club": "Al-Hilal",
          "logo": "https://cdn.sofifa.net/meta/team/7011/120.png",
          "rating": 84,
          "diving": 81,
          "handling": 82,
          "kicking": 77,
          "reflexes": 86,
          "speed": 38,
          "positioning": 83
        },
        {
          "name": "Bruno Fernandes",
          "photo": "https://cdn.sofifa.net/players/212/198/25_120.png",
          "position": "CM",
          "nationality": "Portugal",
          "flag": "https://cdn.sofifa.net/flags/pt.png",
          "club": "Manchester United",
          "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
          "rating": 88,
          "pace": 75,
          "shooting": 85,
          "passing": 89,
          "dribbling": 84,
          "defending": 69,
          "physical": 77
        },
        {
          "name": "Jadon Sancho",
          "photo": "https://cdn.sofifa.net/players/233/049/25_120.png",
          "position": "LW",
          "nationality": "England",
          "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
          "club": "Manchester United",
          "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
          "rating": 84,
          "pace": 85,
          "shooting": 74,
          "passing": 78,
          "dribbling": 88,
          "defending": 34,
          "physical": 63
        },
        {
          "name": "Trent Alexander-Arnold",
          "photo": "https://cdn.sofifa.net/players/231/281/25_120.png",
          "position": "RB",
          "nationality": "England",
          "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
          "club": "Liverpool",
          "rating": 87,
          "pace": 76,
          "shooting": 66,
          "passing": 89,
          "dribbling": 80,
          "defending": 79,
          "physical": 71
        },
        {
          "name": "Achraf Hakimi",
          "photo": "https://cdn.sofifa.net/players/235/212/25_120.png",
          "position": "RB",
          "nationality": "Morocco",
          "flag": "https://cdn.sofifa.net/flags/ma.png",
          "club": "Paris Saint-Germain",
          "logo": "https://cdn.sofifa.net/meta/team/591/120.png",
          "rating": 84,
          "pace": 91,
          "shooting": 76,
          "passing": 80,
          "dribbling": 80,
          "defending": 75,
          "physical": 78
        },
        {
          "name": "Youssef En-Nesyri",
          "photo": "https://cdn.sofifa.net/players/235/410/25_120.png",
          "position": "ST",
          "nationality": "Morocco",
          "flag": "https://cdn.sofifa.net/flags/ma.png",
          "club": "Fenerbahçe",
          "logo": "https://cdn.sofifa.net/meta/team/88/120.png",
          "rating": 83,
          "pace": 82,
          "shooting": 82,
          "passing": 63,
          "dribbling": 77,
          "defending": 36,
          "physical": 80
        },
        {
          "name": "Noussair Mazraoui",
          "photo": "https://cdn.sofifa.net/players/236/401/25_120.png",
          "position": "LB",
          "nationality": "Morocco",
          "flag": "https://cdn.sofifa.net/flags/ma.png",
          "club": "Manchester United",
          "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
          "rating": 81,
          "pace": 78,
          "shooting": 66,
          "passing": 77,
          "dribbling": 83,
          "defending": 77,
          "physical": 71
        },
        {
          "name": "Ismael Saibari",
          "photo": "https://cdn.sofifa.net/players/259/480/25_120.png",
          "position": "CM",
          "nationality": "Morocco",
          "flag": "https://cdn.sofifa.net/flags/ma.png",
          "club": "PSV",
          "logo": "https://cdn.sofifa.net/meta/team/682/120.png",
          "rating": 83,
          "pace": 89,
          "shooting": 78,
          "passing": 80,
          "dribbling": 86,
          "defending": 55,
          "physical": 84
        },
        {
          "name": "Gianluigi Donnarumma",
          "photo": "https://cdn.sofifa.net/players/230/621/25_120.png",
          "position": "GK",
          "nationality": "Italy",
          "flag": "https://cdn.sofifa.net/flags/it.png",
          "club": "Paris Saint-Germain",
          "logo": "https://cdn.sofifa.net/meta/team/591/120.png",
          "rating": 89,
          "diving": 88,
          "handling": 84,
          "kicking": 75,
          "reflexes": 90,
          "speed": 50,
          "positioning": 85
        }
      
  ]; 
  
// Declare all 11 player cards
const goalkeeperCard = document.getElementById("goalkeeper-card");

const cb1Card = document.getElementById("cb1-card");
const cb2Card = document.getElementById("cb2-card");
const cb3Card = document.getElementById("cb3-card");

const rmCard = document.getElementById("rm-card");
const cm1Card = document.getElementById("cm1-card");
const cm2Card = document.getElementById("cm2-card");
const lmCard = document.getElementById("lm-card");

const rwCard = document.getElementById("rw-card");
const stCard = document.getElementById("st-card");
const lwCard = document.getElementById("lw-card");

const playerCards = [
  goalkeeperCard,
  cb1Card, cb2Card, cb3Card,
  rmCard, cm1Card, cm2Card, lmCard,
  rwCard, stCard, lwCard
];

console.log(players);



 





// Declare necessary elements for inputs and form
const addingForm = document.getElementById("form");
const searchInput = document.getElementById("search");
const playerNameElement = document.getElementById("player_name");
const playerPhotoElement = document.getElementById("player_photo");
const playerNationalityElement = document.getElementById("player_nationality");
const playerClubElement = document.getElementById("player_club");
const positionDropdown = document.getElementById("position");
const ratingInput = document.getElementById("rating");
const static1 = document.getElementById("pace");
const static2 = document.getElementById("shooting");
const static3 = document.getElementById("passing");
const static4 = document.getElementById("defending");
const static5 = document.getElementById("dribbling");
const static6 = document.getElementById("physicality");
const save_button = document.getElementById("save");


// form visibility 
function show_hidde_form() {
  addingForm.classList.toggle("hidden")
}



function get_player_info() {
  const query = searchInput.value.toLowerCase(); // Get search input
  const foundPlayer = players.find((player) =>
    player.name.toLowerCase().includes(query)
  );

  if (foundPlayer) {  

    if(["CB1", "CB2", "CB3", "RM", "CM1", "CM2", "LM", "LW", "ST", "RW"].includes(foundPlayer.position)){

    //  adding player info to the inputs 
    playerNameElement.value = foundPlayer.name; // Display name
    playerPhotoElement.value = foundPlayer.photo; // Player photo
    playerNationalityElement.value = foundPlayer.flag; // Nationality
    playerClubElement.value = foundPlayer.logo; // Club
    positionDropdown.value = foundPlayer.position; // Set position
    ratingInput.value = foundPlayer.rating; // Player rating

    static1.value = foundPlayer.pace; // Pace
    static2.value = foundPlayer.shooting; // Shooting
    static3.value = foundPlayer.passing; // Passing
    static4.value = foundPlayer.defending; // Defending
    static5.value = foundPlayer.dribbling; // Dribbling
    static6.value = foundPlayer.physical; // Physicality

    }else if (foundPlayer.position === "GK") {

    //  declaring stats labels
      const divinglabel = document.getElementById("diving");
      const handlinglabe = document.getElementById("handling");
      const kicking = document.getElementById("kicking");
      const reflexes = document.getElementById("reflexes");
      const speedlabel = document.getElementById("speed");
      const positioninglabel = document.getElementById("positioning");
   
      // change text content for those labels 
      divinglabel.textContent = "diving"; 
      handlinglabe.textContent = "handling"; 
      kicking.textContent = "kicking"; 
      reflexes.textContent = "reflexes";
      speedlabel.textContent = "speed";
      positioninglabel.textContent = "positioning";

    //  adding player info to the inputs 
    playerNameElement.value = foundPlayer.name; // Display name
    playerPhotoElement.value = foundPlayer.photo; // Player photo
    playerNationalityElement.value = foundPlayer.flag; // Nationality
    playerClubElement.value = foundPlayer.logo; // Club
    positionDropdown.value = foundPlayer.position; // Set position
    ratingInput.value = foundPlayer.rating; // Player rating

      static1.value = foundPlayer.diving; // Pace
      static2.value = foundPlayer.handling; // Shooting
      static3.value = foundPlayer.kicking; // Passing
      static4.value = foundPlayer.reflexes; // Defending
      static5.value = foundPlayer.speed; // Dribbling
      static6.value = foundPlayer.positioning; // Physicality
    }
     
  } else {
    alert("Player not found!");
  } 
} 

// array to push the objects in 
const players_in_field =[] 


// function to stor the informations of players in the field 

function store_player_info() {
    
  
  if(positionDropdown.value === "GK"){
      let GK_info = {
       name : playerNameElement.value,
       photo : playerPhotoElement.value,
       club :playerClubElement.value ,
       nationality : playerNationalityElement.value ,
       position : positionDropdown.value ,
       rating : ratingInput.value ,
       diving : static1.value,
       handling :static2.value ,
       kicking :static3.value ,
       reflexes :static4.value ,  
       speed :static5.value ,
       positioning :static6.value ,
      }
      players_in_field.push(GK_info);
  }
  else if(["CB1", "CB2", "CB3", "RM", "CM1", "CM2", "LM", "LW", "ST", "RW"].includes(positionDropdown.value)) {
    let players_info = {
      name : playerNameElement.value,
      photo : playerPhotoElement.value,
      club :playerClubElement.value ,
      nationality : playerNationalityElement.value ,
      position : positionDropdown.value ,
      rating : ratingInput.value ,
      pace : static1.value,
      shooting :static2.value ,
      passing :static3.value ,
      defending :static4.value ,
      dribbling :static5.value ,
      physical :static6.value ,
     }  
     players_in_field.push(players_info);
  }    
}

// a function to empty the form inputs 
function empty_form() {
  playerNameElement.value = ""; // Display name
  playerPhotoElement.value = ""; // Player photo
  playerNationalityElement.value = ""; // Nationality
  playerClubElement.value = ""; // Club
  positionDropdown.value = ""; // Set position
  ratingInput.value = ""; // Player rating

    static1.value = ""; // Pace
    static2.value = ""; // Shooting
    static3.value = ""; // Passing
    static4.value = ""; // Defending
    static5.value = ""; // Dribbling
    static6.value = ""; // Physicality 
}




