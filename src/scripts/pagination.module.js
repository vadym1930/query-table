// import service
import { writeData } from './shared/render.service';
import { setTl } from './gsap.module';

// cache the DOM
const list = document.getElementsByClassName('pagination')[0];

// bind event
list.addEventListener('click', handler, false);
// defibe handler
function handler(e) {
  // grab all pages
  const pagList = document.querySelectorAll('.page');
  
  // remove active from all pages 
  for (const page of pagList) {
    page.classList.remove('active');
  }
  // add active to clicked page
  e.target.parentNode.classList.add('active');
  // make url for getting page data
  const url = `${e.target.attributes[0].nodeValue}&page=${e.target.innerHTML}`;
  
  // make request via fetch to get current page  
  fetch(url)
    .then((res) => {
      res.json().then((data) => {
        // grab array of objects — movies
        // and make string from all data
        const elements = data.results;
        const info     = JSON.stringify(data);

        // save all data to localStorage
        localStorage.setItem('secret', info);
        // render table width page results          
        writeData('template', 'movies', elements);
        setTl();
      });
    });
}
