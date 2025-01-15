function fibs(n) {
  if (n < 1) return;

  if (n < 3) {
    return n === 1 ? [0] : [0, 1];
  }	

  let f = [0, 1];

  for (let i = 2; i < n; i++) {
    f.push(f[i - 1] + f[i - 2]);
  }

  return f;
}

// const f = fibs(20);
// console.log(f);


function fibsRec(n, seq = [0, 1]) {
	console.log("This was printed recursively");

	if (n < 1) return

	if (n < 3) return (n === 1) ? [0] : [0, 1]

	if (n === seq.length) return seq

	seq.push((seq[seq.length - 1]) + (seq[seq.length - 2]))

	return fibsRec(n, seq)
}

const f = fibsRec(4);
console.log(f);