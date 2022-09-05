/*Au clic sur l'icone
la div modal descend jusqu'en bas de l'écran
et l'icone se modifie en croix
Au clic suivant la div modal remonte
et l'icone reprend sa forme burger
*/


const iconeBurger = document.querySelector('.navbar-mobile i');
console.log(iconeBurger);

const modal = document.querySelector('.modal');
console.log(modal);

iconeBurger.addEventListener('click', function(){
    console.log("test clic");
    modal.classList.toggle('change-modal');
    iconeBurger.classList.toggle('fa-times');
});

