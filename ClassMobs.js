export class Mobs {
    #name;
    #attack;
    #defense;
    #hp;
    #img;
    #target;

    constructor(name,attack,defense,hp,img,target){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.img = img;
        this.target = target;
    }

    get name() {
        return this.#name;
    }
    set name(message) {
        this.#name = message;
    }

    get attack() {
        return this.#attack;
    }
    set attack(message) {
        this.#attack = message;
    }

    get defense() {
        return this.#defense;
    }
    set defense(message) {
        this.#defense = message;
    }

    get hp() {
        return this.#hp;
    }
    set hp(message) {
        this.#hp = message;
    }

    get img() {
        return this.#img;
    }
    set img(message) {
        this.#img = message;
    }

    get target() {
        return this.#target;
    }
    set target(message) {
        this.#target = message;
    }
    attack(target){
        let hpLeft = target - this.attack;
        if (hpLeft <= 0){
            true
        }else{
            return hpLeft;
        }
    }

    addDom(){
        
    }

    removeDom(){

    }

    dropPotion(){

    }

    dropWeapon(){
        
    }

}
