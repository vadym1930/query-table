import { writeData } from './shared/render.service';
import { urls, showQuery } from './shared/url.service';
import { getPagination } from './shared/paginator.service';
// cache the DOM
  const val = document.getElementById('search');
  const searchBtn = document.getElementsByTagName('button')[0];
// bind event
  searchBtn.addEventListener('click', handler, false);
//define handler
  function handler(e){
    e.preventDefault();
    const query = val.value;
    if(query){
      const unionQuery = `${urls.defaultUrl}${urls.searchAction}${urls.apiKey}&query=${query}`;
      fetch(unionQuery)
        .then((res)=>{
          if(res.status != 200){
            return
          }
          res.json().then((data)=>{
            const elements = data.results;
            getPagination(data.total_pages, unionQuery, 8);
            writeData('template', 'movies', elements);
            val.value = '';
          })
        })
    } else{
      val.value = 'input something to search'
    }
  }