let k = prompt('Qani hat tiv pti ?');
let arr = [];
let z = 0;
for(let i=0; i<k; i++){
	let x = Math.floor(Math.random()*10);
	arr[i] = x;
}
for(let i=0; i<k; i++){
	if(i%2==1 && arr[i]>(arr[0]+arr[k-1]) ){
		z+=arr[i];
		console.log(arr[i]);
		console.log(z);
	}
}
//test
let abb = [];
for(let i=0; i<k; i++){
	if(i%2==1 && i!=k-1){
		abb.push('↓');
	}else {
		abb.push('*');
	}
}
document.write('Числа - ' + abb + '<br />')
document.write('Числа - ' + arr + '<br />');
document.write('Числа которые стоят на нечетных местах и при этом превосходят сумму крайних элементов массива - ' + z);