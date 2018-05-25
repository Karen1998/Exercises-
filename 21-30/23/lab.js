let k = prompt('Mut areq massivi erkarutyn@');
let z = 0;
let j = 1;
let arr = []
for(let i=0; i<k; i++){
	let x = Math.round(Math.random()*100);
	arr[i] = x;
	z += x;
	j *= x;
}
document.write(arr + '<br />');
document.write('Massivi tveri gumar@ = ' + z + '<br />');
document.write('Massivi tveri bazmapatik@ = ' + j + '<br />'); 
