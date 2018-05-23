let k = prompt('Mut areq massivi erkarutyn@');
let z = 0;
let z_1 = 0;
let arr = [];
let abb = [];
let number = 0;
for(i=0; i<k; i++){
	let x = Math.floor(Math.random()*100);
	arr[i] = x;
	number = i;
	if (x%2==0) {
		foo();
		break;
	}else if(x%2==1){
		z+=x;
	}
	
}
function foo () {
	number++;
	while(number<k){
		let x = Math.floor(Math.random()*100);
		arr[number] = x;
		number++;
	}
	document.write('Tver - ' + arr + '<br />');
	document.write('Tveri gumar@ minchev arajin zuig tiv@ - ' + z);
}
for(i=0; i<arr.length; i++){
	if(arr[i]%2==1){
		abb.push(arr[i]);
	}
}
if(abb.length==arr.length){
	let verjin = k-1;
	arr.splice(verjin,1);
	arr.splice(0,1);
	for(i=0; i<arr.length; i++){
		z_1+=arr[i];
	}

	alert('Attention');
	alert('Massivi bolor tver@ kenten');
	document.write('Massivi tver@ - ' + abb + '<br />');
	document.write('Masiivi tveri gumar@( Baci arajin u verjinic ) = ' + z_1);
}
