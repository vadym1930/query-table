// grab services
import { writeData } from './shared/render.service';
import { urls } from './shared/url.service';
import { getPagination } from './shared/paginator.service';
import { setTl } from './gsap.module';

// cache the DOM and set settings
const val        = document.getElementById('search');
const searchBtn  = document.getElementsByTagName('button')[0];
const pagesLimit = 8;

// bind event
searchBtn.addEventListener('click', handler, false);

// define handler
  function handler(e) {
    e.preventDefault();
    // grab input value
    const query = val.value;

    // check if not empty
    if (query) {
      // save query
      const unionQuery = `${urls.defaultUrl}${urls.searchAction}${urls.apiKey}&query=${query}`;

      // make request via fetch method
      fetch(unionQuery)
        .then((res) => {
          if (res.status !== 200) {
            return;
          }
          res.json().then((data) => {
            // grab array of objects — movies
            // and make string from all data
            const elements = data.results;
            const info     = JSON.stringify(data);


            // set all stringify data to localStorage
            localStorage.setItem('secret', info);
            // render pagonation
            getPagination(data.total_pages, unionQuery, pagesLimit);
            // render movies in the table
            writeData('template', 'movies', elements);
            // clear input after searching
            val.value = '';
            setTl();
          });
        });
    } else {
      // if empty input give message to user
      val.value = 'input something to search';
    }
  }
