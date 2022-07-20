// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true

        if(this.hasBeenLiked){
            document.getElementById('main').innerHTML += `<img src="/images/badge-like.png" class="badge"/>`
        }else {
            document.getElementById('main').innerHTML += `<img src="/images/badge-nope.png" class="badge"/>`
        }
    }
    
    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
            <div class="feature-suggestion">
                <div class="dog-info">
                    <h4> ${name}, ${age} </h4>
                    <div class="dog-bio">
                        ${bio}
                    </div>
                </div>
                <img class="dog-img" src="${avatar}">
            </div>`
    }
}

export default Dog