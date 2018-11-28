// JavaScript Coding: Write a multiplication function in javascript to use like this.
// console.log(mul(2)(4)(5));

const mul = (x) => {
  return (y) => { 
    return (z) => { 
      return x * y * z
    }
  }
}

console.log(mul(1)(2)(3))