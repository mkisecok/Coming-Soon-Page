// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';

// Import any additional modules you want to include below \/
import moment from "moment"; 

// \/ All of your javascript should go here \/


const day = moment().format('Do'); 
const hours=moment().format('h');
const minut= moment().format('mm');
const second=moment().format('ss');



document.querySelector('#days').innerHTML = `${day} days`;
document.querySelector('#hours').innerHTML =`${hours} hours`;
document.querySelector('#minuts').innerHTML =`${minut} minuts`;  
document.querySelector('#seconds').innerHTML =`${second} seconds`; 