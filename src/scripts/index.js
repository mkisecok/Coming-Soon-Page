// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';

// Import any additional modules you want to include below \/
import moment from "moment"; 

// \/ All of your javascript should go here \/

const button=document.querySelector('#button');
const target = moment().endOf('month');

button.addEventListener('click', e=>
{
setInterval(function() {

    let now = moment().format();
    let diffDuration = moment.duration(target.diff(now));

    document.querySelector('#days').innerHTML = `${diffDuration.days() } days`;

    document.querySelector('#hours').innerHTML= `${diffDuration.hours()} hours`;

    document.querySelector('#minutes').innerHTML=`${diffDuration.minutes()} minutes`;

    document.querySelector('#seconds').innerHTML=`${diffDuration.seconds()} seconds`;
}, 1000)})
    


