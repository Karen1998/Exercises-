let arr = [];
let k = prompt('Qani qnqam cikl@ fra?');

for(let i=0; i<=k; i++){
	if(i%2==0){
		arr[i]=1;
	}else {
		arr[i]=i%5;
	}
}
document.write(arr);