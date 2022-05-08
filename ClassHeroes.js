export class Heroes {
    #surname;
    #firstname;
    #strength;
    #defense;
    #hp;
    #damages;
    #potionsBag;
    #weaponsBag;

    constructor(surname,firstname,strength,defense,damages,hp,potionsBag,weaponsBag){
        this.surname = surname;
        this.firstname = firstname;
        this.strength = strength;
        this.defense = defense;
        this.damages = damages;
        this.hp = hp;
        this.potionsBag = potionsBag;
        this.weaponsBag = weaponsBag;
    }

    get surname() {
        return this.#surname;
    }
    set surname(message) {
        this.#surname = message;
    }

    get firstname() {
        return this.#firstname;
    }
    set firstname(message) {
        this.#firstname = message;
    }

    get strength() {
        return this.#strength;
    }
    set strength(message) {
        this.#strength = message;
    }

    get defense() {
        return this.#defense;
    }
    set defense(message) {
        this.#defense = message;
    }

    get damages() {
        return this.#damages;
    }
    set damages(message) {
        this.#damages = message;
    }

    get hp() {
        return this.#hp;
    }
    set hp(message) {
        this.#hp = message;
    }

    get potionsBag() {
        return this.#potionsBag;
    }
    set potionsBag(message) {
        this.#potionsBag = message;
    }

    get weaponsBag() {
        return this.#weaponsBag;
    }
    set weaponsBag(message) {
        this.#weaponsBag = message;
    }

    attack () {
        return this.strength * this.damages;
    }

    autoGettingItems () {
        return "Aled"
    }

    useHealthPotion () {
        return "Aled"
    }

    useManaPotion () {
        return "Aled"
    }
    
}
