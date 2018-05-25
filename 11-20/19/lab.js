let x = prompt('Mut areq dzer uzac tiv@');
let k = prompt('Qani hat tiv lini massivi mej ?');
let arr = [];
let z = 0;
for(let i=0; i<k; i++){
	let exp = Math.round(Math.random()*10);
	arr[i] = exp;
}
for(let i=0; i<k; i++){
	if(arr[i]==x){
		z+=1;
	}
}
alert('Drez pahac tiv@ krknvec ' + z + ' angam ');
document.write(arr);