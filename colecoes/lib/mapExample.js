const myMap = new Map()

console.log(myMap.set('apple', 'fruit'));
// Map(1) { "apple" => "fruit"}

console.log(myMap.get('apple'));
// "fruit"

console.log(myMap.delete("apple"))
// true

console.log(myMap.get('apple'))
// undefined