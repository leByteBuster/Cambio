class Card {

  type; // name / type of card
  number; // score of card

  constructor(type, number){
    this.type = type;
    this.number = number;
  }
}

class ActionCard extends Card {
  // what to do here ?? do i even need anything ? 
}

class SwapCard extends ActionCard {

  constructor(name, number){
    this.name = name;
    this.number = number;
  }

  playAction(player){
    // todo: swap 
  }
}


class PeekCard extends ActionCard {

  constructor(name, number){
    this.name = name;
    this.number = number;
  }

  playAction(player){
    //todo: peek
  }
}
