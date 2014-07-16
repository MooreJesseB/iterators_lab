# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working. 


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function`

"Higher order functions, at a basic level, are functions that either take a function as an argument or return a function as a value.  In a more abstract sense, Higher Order functions allow you simple repetitive and potentially bug prone code to be expressed in a much more simple way:  They allow you to say what you 'mean' to do instead of all of the details of actually doing it"


Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:


* `max` - Takes an array and returns the highest value in that array.  Ex: 

max([1, 5, 2, 23, 14, 1]) 

would return the value 23.

* `min` - Takes an array and returns the smallest value in that array.  Ex:  

min([5, 11, -2, 13, 9, -5]) ;

would return the value -5.

* `each` - takes an array and a function, or action, to perform on each value in the array.  Ex:  

each([3, 5, 9, 1, 0], function(value){
	console.log(value);
})

would log each value in the array to the console.

* `map` - Takes an array and a function, or action, and returns an equivalent array that has had each value in the original array modified in the same way by the function.  Ex:

map([5, 3, 11, 24, 2], function(value){
	return value * 2;
})

would return an array of the same size and order where every value in the array has been multiplied by 2.

* `filter`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - takes an array and a function which tests each element in the array against a condition and returns a new array comprised of all the elements that passed the test as true.  Ex:

filter([4, 7, 1, 9, -3, 12], function(element){
	return element > 5;
});

would return the following array:  [7, 9, 12];

* `reduce`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

Takes an array and a function and applies an operation to each element of an array to return a single, total number.  Ex:

reduce([1,2,3,4], function(a, b){
	return a + b;
})

would return the value of 10, the total of adding up all of the numbers in the array.

* `reject`: [note](http://underscorejs.org/#reject) 

Takes an array and a function and returns a new array of all the elements that did not pass the test in the function.  The opposite of filter. Ex:

reject([1,2,3,4,5,6], function(element) {
	return element > 3;
})

would return the following array:  [1,2,3]

Use the notes provided to help guide you explanation.



### Phase-2 

* Write a test in the `test` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration. 

* Re-implement the `each` function we did in class, but write the spec for it first. Continue this exercise with `map` and `filter`.


### Phase-3

Implement the remaining iterator methods in the namespace.


### Phase-4

Refactor the following code using `map` to make only one call to the `map` function versus the two below.


```
var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
	return num * num;
};

var sqrRoot = function(num) {
	return Math.sqrt(num);
};


var sqrNumbers = map(myNumbers, square);
var absNumbers = map(sqrNumbers, sqrRoot);
```




