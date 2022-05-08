import { Mobs } from "./ClassMobs.js";

export default class TrashMobs extends Mobs {
    static #attack;
    static #defense;
    static #hp;

    constructor(coeff){
        super(TrashMobs.#attack*coeff, TrashMobs.#defense*coeff, TrashMobs.#hp*coeff);
    }

    dropPotion(){//Low chances

    }

    dropWeapon(){//Low chances
        
    }

}
