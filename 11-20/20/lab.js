let k = prompt('Mut areq massivi erkarutyn@');
let z = 0;
let arr = []
for(i=0; i<k; i++){
	let x = Math.round(Math.random()*100);
	arr[i] = x;
	if(x%2==0){
		z+=1;
	}
}
alert(z + ' Zuig tiv ka dzer massivum');
document.write(arr);