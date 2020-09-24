const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function(){
        modalOverlay.classList.add('active')

        const imageId = card.getAttribute("id");   
        modalOverlay.querySelector("img").src = `img/${imageId}.png`;

        const nomeReceita = card.getElementsByTagName("h4")[0].textContent
        modalOverlay.querySelector('h4').innerHTML = `${nomeReceita}`

        const chef = card.getElementsByTagName("h5")[0].textContent
        modalOverlay.querySelector('h5').innerHTML = `${chef}`      
    })
}

document.querySelector(".close-modal").addEventListener("click",function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""

})