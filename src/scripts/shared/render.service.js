// export import stuff
import { render } from 'mustache';
export { writeData };

/**
 * get where to render and what to render, pass object with data
 * @param {string} template 
 * @param {string} target 
 * @param {object} data 
 */
function writeData(template, target, data) {
  const what     = document.getElementsByClassName(template)[0].innerHTML;
  const rendered = render(what, { data });

  document.getElementsByClassName(target)[0].innerHTML = rendered;
}
