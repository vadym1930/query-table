// modules
import '../scss/style.scss';
import './search.module';
import './pagination.module';
import './sort.module';

// methods and vars
import { writeData } from './shared/render.service';
import { urls } from './shared/url.service';
import { getPagination } from './shared/paginator.service';

const unionQuery = `${urls.defaultUrl}${urls.defaultAction}${urls.apiKey}`;
const pagesLimit = 8;

fetch(unionQuery)
    .then((response) => {
        if (response.status !== 200) {
            return;
        }
        response.json().then(data => {
            const elements = data.results;
            const info     = JSON.stringify(data);

            localStorage.setItem('secret', info);
            writeData('template', 'movies', elements);
            getPagination(data.total_pages, unionQuery, pagesLimit); 
        });
    });
