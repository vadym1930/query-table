import { render } from 'mustache';
export {writeData};

console.log(render);
function writeData(template, target, data){
  const what = document.getElementById(template);
  const where = document.getElementById(target);
  const rendered = render(what.innerHTML, {data});
  where.innerHTML = rendered;
}