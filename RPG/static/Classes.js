

// export class RPG {
//     constructor(){
//         this.dateCreated = new Date();
//         this.id = getId();
//     }
    
//     getId = () => {
//         return Math.random() * (1000 - 1) + 1;
//     }
    
//     setAttributes = (attributes) => {
//         for (const [key, value] of Object.entries(attributes)) {
//             Object.assign(key, value) // dynamically creating attributes on an object
//         }
//     }
    
//     getAttributes = () => {
//         return {
//             id : this.id,
//             name: this.name,
//             player : this.player,
//             class : this.class,
//             race: this.race,
//             dateCreated: this.dateCreated
//         }
//     }
// }