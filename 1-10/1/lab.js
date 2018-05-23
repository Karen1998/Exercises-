let arr = [];
var k = prompt('Mut areq arjeq@');
for(i=0; i<=k; i++){
	if(i==0 || i==k){
		arr[i] = 1;
	}else {
		arr[i] = 0;
	}
}
document.write(arr);