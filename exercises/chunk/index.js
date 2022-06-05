// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution #1
// function chunk(array, size) {

//   const chunked = [];

//   for (const element of array) {
//     // 'last' will be the chunk we are currently working with
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   return chunked;
// }

// Solution #2
function chunk(array, size) {
  const chunked = [];
  let index = 0;
  const last = chunked;
  console.log('last',typeof last);


  while (index < array.length) {

    const slicedArr = array.slice(index, index + size);

    chunked.push(slicedArr);

    index += size;

  }

  return chunked;

}

module.exports = chunk;
