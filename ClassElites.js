import { Mobs } from "./ClassMobs.js";

export default class Elites extends Mobs {
    static #attack;
    static #defense;
    static #hp;

    constructor(coeff){
        super(Elites.#attack*coeff, Elites.#defense*coeff, Elites.#hp*coeff);
    }

    dropPotion(){//Average chances

    }

    dropWeapon(){//Average chances
        
    }

}