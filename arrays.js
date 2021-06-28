var list = ["hi", "hello", "bye"];
console.log(list[0]);

var nums = [1,2,3,4];

var booleans = [true, false];

var functionList= [function apple(){
	console.log("Apple");
}]

var misxedList = ["apples", 3, true, function apple(){}]


var nums = [[1,2,3,4]];



// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.

// 2. Sort the array in order.

// 3. Put "Kiwi" at the end of the array.

// 4. Remove "Apples" from the array.

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

//you should have at the end:
//["Kiwi", "Oranges", "Blueberries"]

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
undefined
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
undefined
array.shift()
"Banana"
array
(3) ["Apples", "Oranges", "Blueberries"]
array.sort();
(3) ["Apples", "Blueberries", "Oranges"]
array.push("kiwi");
4
array.shift()
"Apples"
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
undefined
array.reverse();
(4) ["Blueberries", "Oranges", "Apples", "Banana"]
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
undefined