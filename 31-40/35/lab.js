let k = prompt('Qani tiv tpi ?');
let arr = [];
let abb = [];
for(let i=0; i<k; i++){
	let x = Math.floor(Math.random()*100);
	arr[i]=x;
	if(x%2==0){
		abb.push(x);
	}
}
let min = abb[0];
let j = abb.length;
for(let i=0; i<j; i++){
	if(abb[i]<min){
		min = abb[i];
	}
}

document.write("Tver - " + arr + "<br />");
document.write("Amena poqr zuig tiv@ - " + min);