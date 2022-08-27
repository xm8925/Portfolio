console.log("Welcome to my site!");


const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})


function deploy() {
    alert("Deployment coming soon!");
}