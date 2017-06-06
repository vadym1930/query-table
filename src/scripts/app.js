console.log('here !!');
require('../scss/style.scss');

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7e9aa3015d3ebeaa49578d245d8cdf1b`)
    .then((response)=>{
        console.log(response.status);
        if(response.status != 200){
            return
        }
        response.json().then(data => {
            console.log(data);

        });
    });
