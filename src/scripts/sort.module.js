import { dynamicSort } from './shared/sort.service';
import { writeData } from './shared/render.service';
import { getPagination } from './shared/paginator.service';

// cache the DOM
const sortBtn = document.getElementsByTagName('th');

//bind events
for (let th of sortBtn){
  th.addEventListener('click', handler, false);
}

//define handler
function handler(e){
  let param = e.target.attributes[0].nodeValue;
  const data = JSON.parse(localStorage.getItem('secret'));
  const elements = data.results.sort(dynamicSort(param));
  writeData('template', 'movies', elements);
  if(param.charAt(0) == '-'){
    e.target.classList.remove('sorted');    
    e.target.attributes[0].nodeValue = param.slice(1);
  } else {
    e.target.attributes[0].nodeValue = `-${param}`;
    e.target.classList.add('sorted');
  }
}