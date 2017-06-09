import { writeData } from './shared/render.service';
//cache the DOM
  const list = document.getElementsByClassName('pagination')[0];
//bind event
  list.addEventListener('click', handler, false);
//defibe handler
  function handler(e){
    const pagList = document.querySelectorAll('.page');
    for (let page of pagList){
      page.classList.remove('active');
    }
    e.target.parentNode.classList.add('active');
    console.log(pagList);
    const url = e.target.attributes[0].nodeValue + `&page=${e.target.innerHTML}`;
    fetch(url)
      .then((res)=>{
        res.json().then((data)=>{
          const elements = data.results;
          const info     = JSON.stringify(data);

          localStorage.setItem('secret', info);          
          writeData('template', 'movies', elements)
        });
      })
  }
