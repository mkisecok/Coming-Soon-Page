// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';

// Import any additional modules you want to include below \/
import moment from "moment"; 

// \/ All of your javascript should go here \/

const button=document.querySelector('#button');
const day = moment().endOf('month').fromNow(); 
const hours=moment().endOf('day').fromNow();
const minute= moment().endOf('hour').fromNow();
const second=moment().format('ss');

button.addEventListener('click', e=>
{   
    document.querySelector('#days').innerHTML = `${ day } `;
    document.querySelector('#hours').innerHTML =`${ hours }`;
    document.querySelector('#minuts').innerHTML =`${ minute } `;  
    document.querySelector('#seconds').innerHTML =`${ 60 - second } seconds`;
   
})

