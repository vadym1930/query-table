import { writeData } from './shared/render.service';
//cache the DOM
  const list = document.getElementsByClassName('pagination')[0];
//bind event
  list.addEventListener('click', handler, false);
//defibe handler
  function handler(e){
    const url = e.target.attributes[0].nodeValue + `&page=${e.target.innerHTML}`;
    fetch(url)
      .then((res)=>{
        res.json().then((data)=>{
          const elements = data.results;
          writeData('template', 'movies', elements)
        });
      })
  }
