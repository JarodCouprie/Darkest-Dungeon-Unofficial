import { Mobs } from "./ClassMobs.js";

export default class Bosses extends Mobs {
    static #attack;
    static #defense;
    static #hp;

    constructor(coeff){
        super(Bosses.#attack*coeff, Bosses.#defense*coeff, Bosses.#hp*coeff);
    }

    dropPotion(){//High chances

    }

    dropWeapon(){//High chances
        
    }

}