let k = prompt('Qani tiv tpi ?');
let arr = [];
for(let i=0; i<k; i++){
	let x = Math.floor(Math.random()*100);
	arr[i] = x;
}
let num = arr.length;
let max = 0;
let min = arr[0];
for(let i=0; i<num; i++){
	for(let j=1; j<num; j++){
		if(arr[i]>max){
			max = arr[i];
		}
		if(arr[i]<min){
			min = arr[i];
		}
	}
}
document.write('Tver - ' + arr + '<br />');
document.write('Max + Min = ' + (max + min) );