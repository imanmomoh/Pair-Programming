let num = [2, 4, 7, 11, 15, 16]

let odd = num.filter(number => {
   return number % 2 !== 0 
})
let even = num.filter(number => {
    return number % 2 === 0 
 })
console.log(odd)
console.log(even)
