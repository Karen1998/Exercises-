let arr = [];
let k = prompt('Vor tvic hashvi?');
for(let i=k; i>0; i--){
	if(i%3==0){
		arr.push(i);
	}
}
document.write(arr);