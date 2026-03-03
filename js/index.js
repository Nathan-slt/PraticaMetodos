const modal1 = document.querySelector('.modal-container1')
const modal2 = document.querySelector('.modal-container2')
const modal3 = document.querySelector('.modal-container3')
const modal4 = document.querySelector('.modal-container4')
const overlay = document.getElementById('overlay')

// MODAL 1
function openModal1() {
    modal1.classList.add('active')
    overlay.classList.add('active')
}

function closeModal1() {
    modal1.classList.remove('active')
    overlay.classList.remove('active')
}

// MODAL 2
function openModal2() {
    modal2.classList.add('active')
    overlay.classList.add('active')
}

function closeModal2() {
    modal2.classList.remove('active')
    overlay.classList.remove('active')
}

// MODAL 3
function openModal3() {
    modal3.classList.add('active')
    overlay.classList.add('active')
}

function closeModal3() {
    modal3.classList.remove('active')
    overlay.classList.remove('active')
}

// MODAL 4
function openModal4() {
    modal4.classList.add('active')
    overlay.classList.add('active')
}

function closeModal4() {
    modal4.classList.remove('active')
    overlay.classList.remove('active')
}
