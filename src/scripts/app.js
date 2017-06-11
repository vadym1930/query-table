// grab modules
import '../scss/style.scss';
import './search.module';
import './pagination.module';
import './sort.module';
import './shared/message.service';

// grab methods and vars
import { writeData } from './shared/render.service';
import { urls } from './shared/url.service';
import { getPagination } from './shared/paginator.service';

// set default settings
const unionQuery = `${urls.defaultUrl}${urls.defaultAction}${urls.apiKey}`;
const pagesLimit = 8;

// make request via fetch method
fetch(unionQuery)
    .then((response) => {
        if (response.status !== 200) {
            // return if not 200 code status
            return;
        }
        response.json().then(data => {
            // grab array of ojects of movies 
            // and make string from all data
            const elements = data.results;
            const info     = JSON.stringify(data);

            // set data to localStorage
            localStorage.setItem('secret', info);
            // render data in the table
            writeData('template', 'movies', elements);
            // render pagination
            getPagination(data.total_pages, unionQuery, pagesLimit); 
        });
    });
