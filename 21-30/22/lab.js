let k = prompt('Mut areq massivi erkarutyn@');
let z = 0;
let j = 0;
let arr = []
for(i=0; i<k; i++){
	let x = Math.round(Math.random()*100);
	if(x==0){
		x+1;
	}
	arr[i] = x;
}
for(i=1; i<k-1; i++){
	if(arr[i]%arr[0]==0){
		z+=1;
	}
	else if(arr[i]%arr[k-1]==0){
		j+=1;
	}
}
if(arr[0]==arr[k-1]){
	alert('Arajin ev verjin andamner@ nuinen');
}else if(z>j){
	alert('Arajin andami vra bajanvox tver@ aveli shaten');
}else if (j>z) {
	alert('Verjin andami vra bajanvox tver@ aveli shaten');
}else if (z==0 && j==0) {
	alert('Tver@ bajanvumen MENAK irar vra');
}else if(j==z){
	alert('arajin ev verjin andamneri bajanvox tveri qanaq@ havasar e');
}
console.log(z);
console.log(j);
document.write(arr);