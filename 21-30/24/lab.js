let k = prompt('Mut areq massivi erkarutyn@');
let z = 0;
let arr = []
for(let i=0; i<k; i++){
	let x = Math.round(Math.random()*100);
	arr[i] = x;
	if(x%2==0){
		z+=x;
	}
}
document.write(arr + '<br />');
document.write('Zuig tveri gumar@ = ' + z);
