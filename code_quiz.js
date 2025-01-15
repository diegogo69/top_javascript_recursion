function sumRange(n) {
    console.log(n);
    if (n  === 1) return n
    else return n + sumRange(n - 1);
}

// console.log(sumRange(3));

function power(base, exp) {
    if (exp === 0) return 1
    // Actually non needed. Bcs there's a moment where it becomes
    // n * ( power(n, exp - 1) ) where it's actually n * 1, bcs the exp was zero
    // So n * 1 is the same as just returning n. Wich is what the below line does
    if (exp === 1) return base
    else return base * power(base, exp - 1) 
}

// console.log(power(2, 4));

function factorial(n) {
    if (n <= 0) return

    if (n === 1) return 1

    else return n * factorial(n - 1)
}

// console.log(factorial(5));

function all(arr, fn, i = 0) {
    // for (let i = 0; i < arr.length, i++) {
    //     if (!fn(arr[i])) return false
    // }
    // return true

    // If not array. just for safety
    if (!arr) return

    // Execute current iteration
    const it = fn(arr[i]);

    // If last arr el return iteration
    if (i === (arr.length - 1)) return it

    // If iteration false return false
    if ( !it ) return false

    // If iteration true. Return next iteration
    else return all(arr, fn, i + 1)
}

const allAreLessThanSeven = all([1,4,6], function(num){
	return num < 7;
});

// console.log(allAreLessThanSeven); // false

function productOfArray(arr, i = 0) {
    if (i === arr.length - 1) { return arr[i]}

    return arr[i] * productOfArray(arr, i + 1)
}

// console.log(productOfArray([1,2,3,10])); // 60

function contains(obj, val) {
    // if (!obj) return false
    for (let value of Object.values(obj)) {
        if (value === val) return true;
        else if (typeof value === 'object') return contains(value, val)
    }
    return false
}

const nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        something: 'foo2',
                        magicNumber: 44,
                        other: {
                            val: 'val',
                        }
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
let doHaveIt = contains(nestedObject, "val"); // false

console.log(hasIt);
console.log(doesntHaveIt);
console.log(doHaveIt);