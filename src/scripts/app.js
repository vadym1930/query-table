
import style from '../scss/style.scss';
import './search.module';
import { writeData } from './shared/render.service';
import { urls, showQuery } from './shared/url.service';
import { getPagination } from './shared/paginator.service';

console.log(urls);
const unionQuery = `${urls.defaultUrl}${urls.defaultAction}${urls.apiKey}`;
fetch(unionQuery)
    .then((response)=>{
        console.log(response.status);
        if(response.status != 200){
            return
        }
        response.json().then(data => {
            const elements = data.results;
            const pages    = data.pages;
            console.log(data);
            writeData('template', 'movies', elements);
            showQuery('myQuery', unionQuery);
            getPagination(data.total_pages);
        });
    });
