let buttons = document.querySelectorAll(".drum");
let tom1 = new Audio('./sounds/tom-1.mp3')
let tom2 = new Audio('./sounds/tom-2.mp3')
let tom3 = new Audio('./sounds/tom-3.mp3')
let tom4 = new Audio('./sounds/tom-4.mp3')
let snare = new Audio('./sounds/snare.mp3')
let kick_bass = new Audio('./sounds/kick-bass.mp3')
let crash = new Audio('./sounds/crash.mp3')

// button press
buttons.forEach(button => {
    button.addEventListener("keydown", (e) => {
        let current_key = e.key;
        makeSound(current_key);
        buttonAnimation(current_key);
    })
})

// mouse click
buttons.forEach(button => {
    button.addEventListener("click", function() {
        let inner_html = this.innerHTML;
        makeSound(inner_html);
        buttonAnimation(inner_html);
    })
})

// animation
function buttonAnimation(key) {
    let activeButton = document.querySelector(`.${key}`)
    activeButton.classList.add("pressed")

    setTimeout(_ => {
        activeButton.classList.remove("pressed")
    }, 100)
}

// sound
function makeSound(key) {
    switch (key) {
        case "w":
            crash.currentTime = 0;
            crash.play();
            break;
        case "a":
            kick_bass.currentTime = 0;
            kick_bass.play();
            break;
        case "s":
            snare.currentTime = 0;
            snare.play();
            break;
        case "d":
            tom1.currentTime = 0;
            tom1.play();
            break;        
        case "j":
            tom2.currentTime = 0;
            tom2.play();
            break;     
        case "k":
            tom3.currentTime = 0;
            tom3.play();
            break;     
        case "l":
            tom4.currentTime = 0;
            tom4.play();
            break;     
        default:
            console.log(key);
    }
}