// Merge sort algorithm implementation
function ms(arr) {
  // Return 1 item long array. (Technically sorted)
  if (arr.length === 1) return arr;

  // If array more than 1 item long, divide and sort each half

  // Get 'middle' element of array
  let m = Math.ceil(arr.length / 2);

  // Sort first half
  let a = ms(arr.slice(0, m));
  // Sort second half
  let b = ms(arr.slice(m));

  // Merged two sorted halves
  let merged = [];

  // While there's at least 1 item in both arrays
  while (a[0] && b[0]) {
    // Less than comparison. Sort lesser to greater
    if (a[0] < b[0]) {
      // If first item of 'a' half lesser, push to merged
      merged.push(a[0]);
      // Delete first 'a' half first item after it was added
      a.splice(0, 1);
    } else {
      // Push first 'b' half item if lesser
      merged.push(b[0]);
      // Delete after added
      b.splice(0, 1);
    }
  }

  // If half has no more items, add all of the other half
  if (!a[0]) merged.push(...b);
  else if (!b[0]) merged.push(...a);

  return merged;
}

const a = ms([3, 2, 1, 13, 8, 5, 0, 1]);
console.log(a);

// [0, 1, 1, 2, 3, 5, 8, 13]