let a_1 = prompt('Mut are arajin andam@');
let d = prompt('Mut areq andamneri tarberutyn@');
let x = prompt('Minchev vor tiv@?');
// let a_2 = d + a_1;
let arr = [];

for(let i=0; i<x; i++){
	arr.push(a_1);
	d=parseInt(d);
	a_1=parseInt(a_1);
	a_1 += d;
}

document.write(arr);