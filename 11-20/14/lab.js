let k = prompt('Qani tiv tpi ?');
let arr = [];
let arr_1 = [];
for(let i=0; i<k; i++){
	let x = Math.round(Math.random() + 0.3);
	//let x =  Math.floor(Math.random() * (max - min + 1)) + min;
	if(x==1){
		arr.push(x);
	}else if(x==0){
		arr_1.push(x);
	}

}

console.log(arr);
console.log(arr_1);