let k = prompt('Qani tiv pti ?');
let arr = [];
let abb = [];
let sum = 0;
let min;
for(let i = 0; i<k; i++){
	let x = Math.floor(Math.random()*10);
	arr[i]=x;
}
for(let i = 0; i<k; i++){
	for(let j=i+1;j<k; j++){
		sum = arr[i]+arr[j];
		abb.push(sum);
	}
}
let len = abb.length;
min = abb[0];
for(let i=0;i<len;i++){
	if(abb[i]<min) min = abb[i];
}
document.write('Tver - ' + arr + '<br />');
document.write('Tveri gumar@ - ' + abb + '<br />');
document.write('Tveri gumaric amena poqr@ - ' + min);