// Merge sort algorithm implementation
function ms(arr) {

  if (arr.length === 1) return arr;

  // Divide array in two
  let m = Math.ceil(arr.length / 2);

  let a = ms(arr.slice(0, m));

  let b = ms(arr.slice(m));

  let merged = [];

  while (a[0] && b[0]) {
    if (a[0] < b[0]) {
      merged.push(a[0]);
      a.splice(0, 1);
    } else {
      merged.push(b[0]);
      b.splice(0, 1);
    }
  }
  if (!a[0]) merged.push(...b);
  else if (!b[0]) merged.push(...a);

  return merged;
}

const a = ms([3, 2, 1, 13, 8, 5, 0, 1]);
console.log(a);

// [0, 1, 1, 2, 3, 5, 8, 13]