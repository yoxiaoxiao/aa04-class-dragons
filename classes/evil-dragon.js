const Dragon = require("./dragon");

class EvilDragon extends Dragon {
    constructor (name, color, evilDoings, nemesis) {
        super(name, color);
        this.evilDoings = evilDoings;
        this.nemesis = nemesis;
    }

    dontInviteThemOverForDinner() {
        this.evilDoings.forEach((evildoing) => {
            console.log(`${this.name} will ${evildoing}`);
        });
    }

    burnsNemesis() {
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
    }

}


module.exports = EvilDragon;