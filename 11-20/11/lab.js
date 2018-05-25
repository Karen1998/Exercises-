let arr = [];
let exp_1 = prompt('Mut areq arajin tiv@ kam nshan@');
let exp_2 = prompt('Mut areq erkrord tiv@ kam nshan@');
let k = prompt('Qani anqam cikl@ fra?');

for(let i=1; i<=k; i++){
	for(j=1; j<=3; j++){
		arr.push(exp_1);
	}
	for(j=1; j<=3; j++){
		arr.push(exp_2);
	}
}
//or 6 / 9 unshift

document.write(arr);