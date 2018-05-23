let k = prompt('Qani hat tiv pti ?');
let arr = [];
let num = Math.floor(k/2);
let z = 0;
for(i=0; i<k; i++){
	let x = Math.floor(Math.random()*10);
	arr[i] = x;
}
for(i=0, j=k-1; i<num, j>=num; i++, j--) {
 	console.log(z);
 	z+=arr[i]*arr[j];
 	console.log(z);
}
document.write(arr + '<br />');
document.write(z);