function mergeSort(arr) {
  // Base case. Single item list
  // It's already sorted
  if (arr.length === 1) return arr;

  // Divide and conquer

  // list
  const m = Math.ceil(arr.length / 2);

  // divide a
  const aa = mergeSort(arr.slice(0, m));

  // divide b
  const ba = mergeSort(arr.slice(m));

  return merge(aa, ba);

  // compare el of adjacent list
  function merge(a, b) {
    const merged = [];

    while (a && b) {
      if (a[0] < b[0]) {
        merged.push(a[0]);
        a.splice(0, 1);
      } else {
        merged.push(b[0]);
        b.splice(0, 1);
      }
    }

    if (!a) merged.push(...b);
    if (!b) merged.push(...a);

    return merged;
  }
}

// const a = mergeSort([1,2]);
// console.log(a);

function ms(arr) {
  if (arr.length === 1) return arr;

  // Divide array in two
  let m = Math.ceil(arr.length / 2);

  let a = ms(arr.slice(0, m));

  let b = ms(arr.slice(m));

  let merged = [];

  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      merged.push(a[i]);
      i++;
    } else {
      merged.push(b[j]);
      j++;
    }
  }
  if (i === a.length) merged.push(...b);
  else if (j === b.length) merged.push(...a);

  return merged;
}

const a = ms([3, 2, 1, 13, 8, 5, 0, 1]);
console.log(a);

// [0, 1, 1, 2, 3, 5, 8, 13]