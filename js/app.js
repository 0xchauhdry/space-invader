//initialization 
const grid = document.querySelector('.grid')
const squares = document.querySelectorAll('.box')

let invader = [[9,8,7,6,5,4,3,2,1,0],
            [24,23,22,21,20,19,18,17,16,15],
            [39,38,37,36,35,34,33,32,31,30]]
let direction = 1
let hero = squares[202]

function createGrid(){
    // Creating Grid
    for (let i=0; i < 225; i++){
        const box = document.createElement('div')
        box.classList.add('box')
        grid.append(box)
    }

    const squares = document.querySelectorAll('.box')
    let hero = squares[202]
    hero.classList.add('hero')
}

function Invader(){
    const sqaures = document.querySelectorAll('.box')
    invader.forEach(elemnt => {
        elemnt.forEach(e => {
            sqaures[e].classList.add('invader')
        })
    })
}

function controlHero(e){
    const squares = document.querySelectorAll('.box')

    if(e.keyCode === 68 || e.keyCode === 39) {
      direction = 1 //if we press the right arrow on our keyboard, the snake will go right one
    } else if (e.keyCode === 87 || e.keyCode === 38) {
      direction = -width // if we press the up arrow, the snake will go back ten divs, appearing to go up
    } else if (e.keyCode === 65 || e.keyCode === 37) {
      direction = -1 // if we press left, the snake will go left one div
    } 
}



window.addEventListener('DOMContentLoaded', () => {
    createGrid()
    Invader()
    document.addEventListener('keyup', controlHero)
})