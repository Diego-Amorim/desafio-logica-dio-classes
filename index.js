class hero{
    constructor(nameHero, ageHero, classHero){
        this.nameHero = nameHero
        this.ageHero = ageHero
        this.classHero = classHero
    }
    atack(){
        this.skill
        if(this.classHero.toLowerCase() == "mage"){
            this.skill = "Magic"
        }else if(this.classHero.toLowerCase() == "warrior"){
            this.skill = "Sword"
        }else if(this.classHero.toLowerCase() == "monk"){
            this.skill = "Martial Arts"
        }else if(this.classHero.toLowerCase() == "ninja"){
            this.skill = "Shuriken"
        }else{
            console.log("This character is not a hero!")
            return
        }

        console.log("The " + this.classHero + " attacked using " + this.skill)
    }
}

let mage = new hero("Gandalf", "65", "Mage")
let warrior = new hero("Beldia", "35", "Warrior")
let monk = new hero("Tenzin", "56", "Monk")
let ninja = new hero("Jackie Chan", "30", "Ninja")
let character = new hero ("Jorge", "16", "Learner")

//console.log(mage)
mage.atack()

//console.log(warrior)
warrior.atack()

//console.log(monk)
monk.atack()

//console.log(ninja)
ninja.atack()

//console.log(character)
character.atack()