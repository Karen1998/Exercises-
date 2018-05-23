let k = prompt('Qani tiv tpi ?');
let arr = [];
for(i=0; i<k; i++){
	let x = Math.floor(Math.random()*10);
	arr[i] = x;
}
for(i=k-2; i>=0; i--){
	z+=arr[k-1]+arr[i];
}
///////////////35%