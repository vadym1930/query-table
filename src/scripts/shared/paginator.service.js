// export import stuff
import { writeData } from './render.service';
export { getPagination };

/**
 * create, render pagination and limit pages to 7
 * @param {number} quantity 
 * @param {string} query 
 * @param {number} restrict 
 */
function getPagination(quantity, query, restrict) {
  // create object for function porposes
  const data = {
    query,
    pages: []
  };

  // if amount of pages smaller then limit show all pages
  const limit = quantity <= restrict ? quantity : restrict;

  // create array of pages
  for (let i = 1; i !== limit; i++) {
    data.pages.push(i);
  }

  // render pagination
  writeData('pag-template', 'pagination', data);
}
