let k = prompt('Qani tiv tpi ?');
let arr = [];
let abb = [];
for(let i=0; i<k; i++){
	let x = Math.floor(Math.random()*100);
	arr[i]=x;
	if(i%2==1) abb.push(x);
}
let j = abb.length;
let max = abb[0];
for(let i=0; i<j; i++){
	if(abb[i]%3==0 && abb[i]>max){
		max = abb[i];
	}
}

document.write("Tver - " + arr + "<br />");
document.write("Amena mec kent indexof ev 3-i bajanvox - " + max);