import { writeData } from './shared/render.service';
import { urls } from './shared/url.service';

// cache the DOM
  const val = document.getElementById('search');
  const searchBtn = document.getElementsByTagName('button')[0];
// bind event
  searchBtn.addEventListener('click', handler, false);

  function handler(e){
    e.preventDefault();
    const query = val.value;
    if(query){
      fetch(`${urls.defaultUrl}${urls.searchAction}${urls.apiKey}&query=${query}`)
        .then((res)=>{
          if(res.status != 200){
            return
          }
          res.json().then((data)=>{
            const elements = data.results;
            console.log(data);
            writeData('template', 'movies', elements);
            val.value = '';
          })
        })
    } else{
      val.value = 'input something to search'
    }
  }

