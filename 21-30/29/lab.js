let k = prompt('Qani hat tiv pti ?');
let arr = [];
for(let i=0; i<k; i++){
	let x = Math.floor(Math.random()*10);
	arr[i] = x;
}
for(let y=0, i=0; i<k; i++) {
 	if (i%2==1){
 		y -= arr[i];
 	}else {
		y += arr[i];
 	}
 	
}
document.write(arr + '<br />');
document.write(y);