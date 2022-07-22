import Dog from './Dog.js'
import dogsData from './data.js'
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])
document.getElementById("accept-button").addEventListener('click', yes)
document.getElementById("reject-button").addEventListener('click', no)
let isClicked = false

render()

function render() {
    document.getElementById('card').innerHTML = currentDog.getDogHtml()
}

function getNewDog() {

    isClicked = false
    if(currentDogIndex >= 2){
        currentDogIndex=0

    } else {
        currentDogIndex+=1
    }
    currentDog = new Dog(dogsData[currentDogIndex])
    render()
    
}

// Functions to pass the boolean into the "currentDog" obj in case of rejection or acceptance and gets a new dog after
function yes() {
    if(!isClicked) {
        currentDog.setMatchStatus(true)
        document.querySelector('.like').classList.remove('hideBadge')
        setTimeout(()=>{
            document.querySelector('.like').classList.add('hideBadge')
            return getNewDog()
        }, 1000 )

        isClicked = true
    }
    
}

function no() {
    if(!isClicked) {
        currentDog.setMatchStatus(false)
        document.querySelector('.nope').classList.remove('hideBadge')
        setTimeout(()=>{
            document.querySelector('.nope').classList.add('hideBadge')
            return getNewDog()
        }, 1000 )
    }
    isClicked = true
}
