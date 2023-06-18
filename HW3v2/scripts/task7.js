const array = ['value', () => 'showValue'];

const [value, showValue] = array;

console.log(value); // Output: 'value'
console.log(showValue()); // Output: 'showValue'