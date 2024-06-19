class Player {

  id;
  name;
  currentCard;
  playingCards; 

  constructor(name, id){
    this.id = id
    this.name = name;
    this.playingCards = {}
    currentCard = undefined;
  }

  getName(){
    return this.name;
  }

  setCards(cards){
    this.playingCards = cards; 
  }

  getCards(){
    return this.playingCards;
  }

  // not sure if we want this in here yet 
  playCard(input, otherPlayer){
    currentCard.play()
  }
 
  // not sure if we want this in here yet 
  drawCard(){}

  // not sure if we want this in here yet 
  // witch currentCard with one of playingCards
  switchCard()

  // not sure if we want this in here yet 
  cambio()
}
