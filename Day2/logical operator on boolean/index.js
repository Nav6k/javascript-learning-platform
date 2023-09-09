//Falsy
//undefined
//null
//0
//false
//''
//NaN

//Anything that is not falsy is truthy
// false || true
// true
// false || 'Mosh'
// 'Mosh'
// false || 1
// 1
// false || 1 || 2
// 1

let userColor = undefined ;
let defaultColor ='blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);