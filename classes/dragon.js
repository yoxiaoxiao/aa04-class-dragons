class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...dragons) {
    let listOfDragons = [];
    for (let dragon of dragons) {
      listOfDragons.push(dragon.name);
    }
    return listOfDragons;
  }
 }

//const puff = new Dragon("Puff", "green");
//console.log(puff);
//console.log(puff.breathesFire());

//const puff = new Dragon("Puff", "green");
//const toothless = new Dragon("Toothless", "black");
//console.log(Dragon.getDragons(puff, toothless));

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
