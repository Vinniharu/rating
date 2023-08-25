let selectedButton = null;

function changeColor(button) {
   if (selectedButton) {
      selectedButton.classList.remove('selected');
   }

   button.classList.add('selected');
   selectedButton = button;
   
}

const btns = document.querySelectorAll('.buttons');
const rates = document.querySelector('.rating');
const thankyou = document.querySelector('.thanks');
const number = document.querySelector('.number');

btns.forEach((button,num) => {
   button.addEventListener('click', () => {
      let currentNum = num + 1;
      number.innerText = currentNum;

   });
});

function thanks(){
   rates.style.display = 'none';
   thankyou.style.display = 'block';
}
