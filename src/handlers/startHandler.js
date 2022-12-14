import  data  from '../data.js';
import  watchTime  from '../logic/time-components.js';
import  getTimeComponent  from '../components/time-components.js';

const timeElement = document.getElementById('time');

function startHandler() {
    if (data.interval !== null) {
        data.interval = clearInterval(data.interval);
    }

    data.interval = setInterval(function() {
        let time = watchTime();
        let timeComponent = getTimeComponent(time);

        timeElement.innerHTML = '';
        timeElement.append(timeComponent);
    }, 2);
}

export default startHandler;

