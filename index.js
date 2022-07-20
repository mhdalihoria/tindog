import Dog from './Dog.js'
import dogsData from './data.js'
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])
document.getElementById("accept-button").addEventListener('click', yes)
document.getElementById("reject-button").addEventListener('click', no)

render()

function render() {
    document.getElementById('card').innerHTML = currentDog.getDogHtml()
}

function getNewDog() {
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
    currentDog.setMatchStatus(true)
    
    setTimeout(()=>{
        return getNewDog()
    }, 1000 )
    
}

function no() {
    currentDog.setMatchStatus(false)

    console.log("this doggie has been disliked")
    setTimeout(()=>{
        return getNewDog()
    }, 1000 )
}
