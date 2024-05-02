
// EVENT TRIGGER FUNCTIONS
function handleClick() {
    alert("Someone clicked the button!")
}

function handleMouseOver() {
    alert("Catch that mouse!")
}

function handleMouseOut() {
    alert("They're getting away!")
}

// event will help us grab what was submitted to forms/inputs, etc
function handleSubmit(event) {
    event.preventDefault(); // preventing any default behavior
    console.log(event) 
    const username = event.target.elements.username.value; // multiple elements use this path
    alert(`Hello ${username}. Welcome to the party`)
}

function handleChange(event) {
    event.preventDefault(); // utilize this whenever you pass an event
    console.log(event)
    const value = event.target.value; // only one thing, not in a container so use this path
    alert(`Changed the value to ${value}`)
}


// DOM MANIPULATION

function handleUpdate() {
    // need to grab the original p tag object
    const paragraph = document.getElementById('paragraph')
    console.log(paragraph)
    paragraph.innerText = 'UPDATED PARAGRAPH!!!'
    
    // creates an HTML Collection 
    const header = document.getElementsByTagName('h1')[0]
    console.log(header)
    header.innerText = 'You are not welcome anymore!'
    
    const myStyles = {
        color: 'red',
        'font-family': 'Arial',
        'font-weight': 500,
        'text-shadow': '2px 2px black'
    }
    
    for (const [key, value] of Object.entries(myStyles)) {
        header.style[key] = value; //style allows us access to the CSS properties
    }
    //same thing as below
    /* h1 {
        color: red
    }
    */
}

function handleCreate(event) {
    event.preventDefault();
    const words = event.target.elements.newdiv.value; //grabbing the words from the form
    
    const newP = document.createElement('p'); //creating a new p element
    newP.innerText = words //adding the words to the p tag
    const body = document.getElementsByTagName('body')[0] // grabbing the body element
    body.appendChild(newP); // appending our new p element to the body
}


function handleGetImage(event) {
    event.preventDefault();
    const imageUrl = event.target.value; //grabbing the url from our input
    console.log(imageUrl);
    
    const newImage = document.createElement('img'); //creating a new image div
    newImage.setAttribute('src', imageUrl); //setting the src attribute to our image url
    const body = document.getElementsByTagName('body')[0] // grabbing the body element
    body.appendChild(newImage); // appending our new image element to the body
}


function handleDivChange() {
    const myDiv = document.getElementsByClassName('container')[0]; //grabbing everything with a classname of 'container' but also grabbing index 0
    myDiv.innerHTML = "<h1>We changed EVERYTHING!</h1>" //changing the innerhtml of that element
}


// EVENT LISTENERS
const eventButton = document.getElementById('eventButton')
console.log(eventButton)


eventButton.addEventListener('click', () => {
    alert('Button Event Triggered')
})

// as soon as it hears a scroll event it triggers this function
document.addEventListener('scroll', ()=>{
    alert('We scrolling')
})

