// Import stylesheets
import './style.css';

//Normal Array
const array = ['xxx','yyy','zzz','uuu','vvv','www']

const index = array.indexOf('vvv'); //Find index of an array
console.log(index)

array.push('aaa') //add last 
array.pop() //remove last element
array.shift() // remove first element
array.unshift('aaa') //add first
array.splice(3,1,'rrr') //remove the start index value by count 1 and replace the rrr value in that index 3
console.log(array)

const slice = array.slice(1,4) // start and end length remove start value and display up to the end length
console.log(slice)



//Array of Objects
const test = [
  {
    stid: 1,
    name: 'xxx'
  },
  {
    stid: 2,
    name: 'yyy'
  },
  {
    stid: 3,
    name: 'xxx'
  }
]

//If in array of object to find index valule
const find = test.find(obj => obj.name == 'yyy');
const findIndex = test.indexOf(find);
console.log(findIndex);

//Push into array
const obj = {
  stid: 4,
  name: 'www'
}
test.push(obj)
console.log(test);

//Filter an Array
const filter = test.filter((obj) => {return obj.name == 'xxx'} )
console.log(filter)