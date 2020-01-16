const swup = new Swup();

const button = document.querySelector('.btn');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');
const resume = document.querySelector('.document');

function handleButtonClick(event) {
    const button = event.currentTarget;
    modalOuter.classList.add('open');
};

button.addEventListener('click', handleButtonClick);

function closeModal(){
     modalOuter.classList.remove('open');
}

 modalOuter.addEventListener('click', function(event){
     const isOutside = !event.target.closest('modal-inner');
     if (isOutside){
         closeModal();
     }
 });

 window.addEventListener('keydown', event => {
     if (event.key === 'Escape') {
         closeModal();
     }
 });
