
require('../scss/style.scss');
import {writeData} from './shared/render.service';

console.log(writeData);

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7e9aa3015d3ebeaa49578d245d8cdf1b`)
    .then((response)=>{
        console.log(response.status);
        if(response.status != 200){
            return
        }
        response.json().then(data => {
            const elements = data.results;
const tmpl = document.getElementById('template');
const where = document.getElementById('movies');            
            writeData('template', 'movies', elements);
        });
    });
