class GameState {

  running
  cambio
  allCards = [allcards]
  players
  deck 
  discardPile

  constructor(players){
    this.discardPile = []
    this.player = players
  }

  initGame(){
    this.deck = allCards
    this.running = true 
    this.cambio = {}
    //karten austeilen
    //eine karte aufdecken
  }

  endGame(){
    this.running = false;
  }

  cambio(player){
    this.cambio = player;
  }

  isRunning(){
    return this.running;
  }
}
