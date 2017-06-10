import { writeData } from './render.service';
export { getPagination };

function getPagination(quantity, query, restrict) {
  const data = {
    query,
    pages: []
  };

  const limit = quantity <= restrict ? quantity : restrict;

  for (let i = 1; i !== limit; i++) {
    data.pages.push(i);
  }
  writeData('pag-template', 'pagination', data);
}
