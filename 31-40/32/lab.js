let k = prompt('Qani tiv tpi ?');
let arr = [];
for(i=0; i<k; i++){
	let x = Math.floor(Math.random()*100);
	arr[i] = x;
}
let num = arr.length;
let max = 0;
for(i=0; i<num; i++){
	for(j=1; j<num; j++){
		if(arr[i]>max){
			max = arr[i];
		}
	}
}
document.write('Tver - ' + arr + '<br />');
document.write('Max - ' + max);