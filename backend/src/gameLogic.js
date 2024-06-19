
players = [] 
playing = false


function loginPlayer(player) {
  this.players.push(player)
}

function removePlayer(player) {
  this.players.remove(player)
}

function startGame(players){
  gameState = new GameState(players)
  gameState.initGame();
  this.play(gameState)
}



function play(gameState){
 
  while(gameState.isRunning()){
    // todo game logic
  }
}
