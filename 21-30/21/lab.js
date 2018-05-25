let k = prompt('Mut areq massivi erkarutyn@');
let z = 0;
let arr = []
for(let i=0; i<k; i++){
	let x = Math.round(Math.random()*100);
	arr[i] = x;
	if(x%3==0 && x%7!=0){
		z+=1;
	}
}
alert(z + '--- Esqan 3-i bajanvox ev 7-i chbajanvox tiv ka');
alert('21-@ chi hashvum');
document.write(arr);