// grab services
import { dynamicSort } from './shared/sort.service';
import { writeData } from './shared/render.service';

// cache the DOM
const sortBtn = document.getElementsByTagName('th');

// bind events to all table column headings
for (const th of sortBtn) {
  th.addEventListener('click', handler, false);
}

// define handler
function handler(e) {
  // 1) grab object key — para for sorting
  // 2) and get data which need to sort from localStorage
  // 3) and make sort
  const param    = e.target.attributes[0].nodeValue;
  const data     = JSON.parse(localStorage.getItem('secret'));
  const elements = data.results.sort(dynamicSort(param));

  // render already sorted data in the table 
  writeData('template', 'movies', elements);
  if (param.charAt(0) === '-') {
    // if minuse before param remove it
    e.target.classList.remove('sorted');    
    e.target.attributes[0].nodeValue = param.slice(1);
  } else {
    // if no minuse add it
    e.target.attributes[0].nodeValue = `-${param}`;
    e.target.classList.add('sorted');
  }
}
