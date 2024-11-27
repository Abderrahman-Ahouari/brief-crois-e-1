async function loadPlayers() {
    try {
      const response = await fetch('../assets/js/players.json');
      const data = await response.json();
      const playerList = document.getElementById('playerList');
        console.log(data)

      data.players.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.innerText = player.name;
        card.draggable = true; 
        playerList.appendChild(card);
      });
    } catch (error) { 
      console.error('Erreur lors du chargement des joueurs :', error);
    }
  } 

  loadPlayers();
