let arr = [];
let k = prompt('Qani angam cikl@ fra?');

for(i=0; i<k; i++){
	let exp = Math.round(Math.random()*10);
	if(exp != 1) arr[i] = exp;
	if(exp == 1) arr[i] = exp + 1;
}

let exp_1 = Math.round(Math.random()*10);
let exp_2 = Math.round(Math.random()*10);
if(exp_1 != exp_2) {
	arr[exp_1] = 1;
	arr[exp_2] = 1;
}else if(exp_1 == exp_2){
	alert('Mi angamel pordzeq');
}

document.write(arr);