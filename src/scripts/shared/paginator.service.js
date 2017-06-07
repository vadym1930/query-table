import { writeData } from './render.service';
export { getPagination };
function getPagination(quantity){
  let data = [];
  let limit = 8;
  if(quantity < 8){
    limit = quantity;  
  }
    for (let i = 1; i != limit; i++){
      data.push(i);
      console.log('here');
    }
    console.log(data);
    writeData('pag-template', 'pagination', data);
}