let k = prompt("Qani tiv pti ?");
let arr = [];
let two;
let three;
let sum = 0;
let max = 0;
for(let i = 0;i<k;i++){
	let x = Math.floor(Math.random()*10);
	arr[i]=x;
}
for(let i = 0;i<k;i++){
	two=1+i;
	three=2+i;
	sum = arr[i]+arr[two]+arr[three];
	if(sum>max) max = sum; 
}
document.write('Tver - ' + arr + '<br />');
document.write('Ireq hajorq tveri gumaric amena mec@ -' + max);
