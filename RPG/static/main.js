// add class imports
// import { RPG as rpgClass } from "./Classes";

class RPG {
    constructor(){
        this.dateCreated = new Date(); // new Date object
        this.id = this.getId();
    }
    
    getId = () => {
        return Math.floor(Math.random() * (1000 - 1) + 1);
    }
    
    setAttributes = (attributes) => {
        Object.assign(this, attributes) // dynamically creating attributes on an object
        
    }
    
    getAttributes = () => {
        return {
            id : this.id,
            name: this.name,
            player : this.player,
            class : this.class,
            race: this.race,
            dateCreated: this.dateCreated
        }
    }
}


// class RPGManager {
    
//     constructor(){
//         this.characters = []
//     }
    
//     addCharacters(character) {
//         this.characters.push(character)
//     }
    
//     getCharaacters() {
//         return this.characters
//     }
// }

// instantiating our RPGManager class
// const rpgManager = new RPGManager();

// add a function to grab that sweet sweet data
function handleGetData(event) {
    event.preventDefault();
    
    // creating data object from our form
    const data = {
        
     name: event.target.elements.name.value,
     player: event.target.elements.player.value,
     class: event.target.elements[2].value,
     race: event.target.elements[3].value
     
    }
    
    console.log(data)
    const myCharacter = new RPG();
    myCharacter.setAttributes(data); 
    console.log(myCharacter.getAttributes());
    // rpgManager.addCharacters(myCharacter) //adds the character object to our RPGManager class
    
    displayCharacters(myCharacter);
}


function displayCharacters(character) {
    
    const display = document.querySelector('.character-display')
    console.log(display)
    const characterData = character.getAttributes();
    
    
        const card = `<div class="card col-md-4 col-12 rounded p-2">
        <div class="card-body">
          <h5 class="card-title">${characterData.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Player: ${characterData.player}</li>
          <li class="list-group-item">Class: ${characterData.class}</li>
          <li class="list-group-item">Race: ${characterData.race}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="btn">Update</a>
          <a href="#" class="btn">Delete</a>
        </div>
      </div>`
      
      // similar to appendChild
      display.insertAdjacentHTML("beforeend", card)
    
}

// get's triggered everytime you enter a page or refresh
document.addEventListener('DOMContentLoaded', () => {
    alert("Welcome to our RPG Character Creator")
})
