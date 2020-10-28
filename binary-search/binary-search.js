'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	//The idea is to split the array in half 
	//Base case - check if the target is equal to the value of the middle index (array[Math.floor(array.length/2)])
	//If the target is equal to the value of the middle index, return true
	//else
	//if target < array[Math.floor(array.length/2)] then binarySearch(array.slice(0, Math.floor(array.length/2))
	//if target > array[Math.floor(array.length/2)] then binarySearch(Math.floor(array.length/2)+1)
	const midIndex = Math.floor(array.length/2)
		console.log("THE ARRAY: ", array)
		console.log("THE MIDDLE INDEX: ", midIndex)
		//console.log(array[midIndex] === target)
		console.log("THIS IS THE TARGET: ", target)
		if (array[midIndex] === target) {
			console.log("WHY IS IT NOT WORKING")
			return true
		} 
		if (target < array[midIndex] && array.length) {
			//console.log('caught')
			return binarySearch(array.slice(0,midIndex), target) //maybe return this?
		}  else if (target > array[midIndex] && array.length) {
			console.log('caught')
			return binarySearch(array.slice(midIndex+1), target)
		}  
		return false
};

console.log('THE RESULT: ', binarySearch([0,1,2,3,4], 1))

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch