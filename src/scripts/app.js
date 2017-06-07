
import style from '../scss/style.scss';
import './serch.module';
import { writeData } from './shared/render.service';
import { urls } from './shared/url.service';

console.log(urls);
fetch(`${urls.defaultUrl}${urls.defaultAction}${urls.apiKey}`)
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
        });
    });
