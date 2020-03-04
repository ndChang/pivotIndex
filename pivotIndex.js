// Given an array of integers nums, write a method that returns the "pivot" index of this array.

// We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

// If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

const pivotIndex = function(nums) {
  //Varible to hold the total sum of the array
  let sum = 0;
  //Loop to calculate the total sum of the array
  for (let i = 0; i < nums.length; i++) {
    //Add number at array index i to sum
    sum += nums[i];
  }
  //Hold total for left side of the array
  let leftSum = 0;
  //Loop to calculate the left side and check if the array has a pivot index
  for (let j = 0; j < nums.length; j++) {
    //Check to see if leftSum is half of the sum after removing the pivot (nums[j])
    if (leftSum === sum - leftSum - nums[j]) {
      //If true returns j as the pivot index
      return j;
    }
    //if the condition fails add the number being viewed to the leftsum total
    leftSum += nums[j];
  }
  //If the loop finishes then there is no pivot index and fuction returns -1 to meet the requirements of the problem
  return -1;
};
