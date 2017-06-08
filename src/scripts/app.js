//modules
import style from '../scss/style.scss';
import './search.module';
import './pagination.module';

//methods and vars
import { writeData } from './shared/render.service';
import { urls } from './shared/url.service';
import { getPagination } from './shared/paginator.service';

const unionQuery = `${urls.defaultUrl}${urls.defaultAction}${urls.apiKey}`;

fetch(unionQuery)
    .then((response)=>{
        if(response.status != 200){
            return
        }
        response.json().then(data => {
            const elements = data.results;
            const pages    = data.pages;
            writeData('template', 'movies', elements);
            getPagination(data.total_pages, unionQuery, 8); 
        });
    });