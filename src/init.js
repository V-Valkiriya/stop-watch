import './listeners/startListener.js';
import './listeners/stopListener.js';
import './listeners/resetListener.js';

import  data  from './data.js';
import  getTimeComponent  from './components/time-components.js';

let timeElement = document.getElementById('time');
let timeComponent = getTimeComponent(data);
timeElement.append(timeComponent);

