let k = prompt('Qani hat tiv pti?');
let arr = [];
// Math.floor(Math.random() * (max - min + 1)) + min
for(i=0; i<k; i++){
	let j = Math.floor(k/2);
	for(i=0; i<k; i++){
		arr[i] = 0;
	}
	for(i=0; i<j; i++){
		let x_1 = Math.floor(Math.random()*(k-1+0))+0;
		let x = Math.floor(Math.random()*10+1);
		arr[x_1] = x;
	}
	for(i=0; i<k; i++){
		if(arr[i] == 0){
			let y = -Math.floor(Math.random()*10+1);
			arr[i] = y;
		}
	}
	if(k%2==1){
		arr[j]=' X ';
	}
	
}
//karoxa bacasakan tver@ shat linen

document.write(arr);