const color   = 'yellow';
const nextColor = '#e95420';
const message = 'incredible,';
const nextMessage = 'but no errors';

console.groupCollapsed('no errors');
  console.log(`%c${message}`, `color:${color}`);
  console.log(`%c${nextMessage}`, `color:${nextColor}`);
console.groupEnd();
