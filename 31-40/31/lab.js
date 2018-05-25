let k = prompt('Qani tiv tpi ?');
let arr = [];
let sum = 0;
let y = 1;
for(let i=0; i<k; i++){
	let x = Math.floor(Math.random()*10);
	arr[i] = x;
	sum += x;
}
let j = k-1;
let h = k-2;
let z = arr[j];
for(let i=h; i>=0; i--){
	z += arr[i];
	y *= z;
}
let answer = arr[j]*y;
document.write('Tver - ' + arr + '<br />');
document.write('Patasxan - ' + answer);