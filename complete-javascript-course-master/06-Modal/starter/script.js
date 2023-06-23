'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal)


const openModal = ()=>{
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}


const closeModel = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for(let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModal );



btnCloseModel.addEventListener('click', closeModel)
overlay.addEventListener('click', closeModel)

document.addEventListener('keydown', (e) =>{
    console.log(e)
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModel()
    } 
} )