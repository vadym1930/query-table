import { render } from 'mustache';
export { writeData };

function writeData(template, target, data) {
  const what     = document.getElementsByClassName(template)[0].innerHTML;
  const rendered = render(what, { data });

  document.getElementsByClassName(target)[0].innerHTML = rendered;
}
