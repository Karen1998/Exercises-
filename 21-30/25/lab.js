let k = prompt('Mut areq massivi erkarutyn@');
let z = 0;
let arr = []
for(let i=0; i<k; i++){
	let x = Math.round(Math.random()*50);
	arr[i] = x;
	if(x%2==1 && x<11){
		z+=x;
	}
}
document.write(arr + '<br />');
document.write('Kent ev 11-@ chgerazancox tveri gumar@ = ' + z);