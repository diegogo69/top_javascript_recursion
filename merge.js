// Merge sort algorithm implementation using js built in methods
function mergeSort(arr) {
  // Return 1 item long array. (Technically sorted)
  if (arr.length === 1) return arr;

  // If array more than 1 item long, divide and sort each half
  // Get 'middle' element of array and sort each half
  // First half (a). Second half (b)
  let m = Math.ceil(arr.length / 2);
  let a = mergeSort(arr.slice(0, m));
  let b = mergeSort(arr.slice(m));

  // Array that stores merged sorted items
  let merged = [];

  // While there's at least 1 item in both arrays
  while (a[0] && b[0]) {
    // Less than comparison for lesser to greater sorting
    // If first item is lesser, add to merged and delete from half
    if (a[0] < b[0]) {
      merged.push(a[0]);
      a.splice(0, 1);
    } else {
      merged.push(b[0]);
      b.splice(0, 1);
    }
  }

  // If half has no more items, add all item's of the other half
  if (!a[0]) merged.push(...b);
  else if (!b[0]) merged.push(...a);

  // Return merged sorted list of items
  return merged;
}

const unsorted = [3, 2, 1, 13, 8, 5, 0, 1];
const sorted = mergeSort(unsorted);
console.log(sorted);