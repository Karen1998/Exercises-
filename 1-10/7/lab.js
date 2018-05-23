alert('Attention!!!');
alert('Tver@ petqa linen kam 0 ev 1 kam 1 ev 1');
let a = prompt('Mut areq arajin tiv@');
let b = prompt('Mut areq erkrord tiv@');
let k = prompt('Qani anqan cikl@ fra(demi erku tver@ chen hashvum)?');
let sum;
let arr = [a,b];
let x = 0;
let y =1;
for(i=0; i<k; i++){
	a = parseInt(a);
	b = parseInt(b);
	arr[x] = parseInt(arr[x]);
	arr[y] = parseInt(arr[y]);
	sum = arr[x]+arr[y];
	sum = parseInt(sum);
	arr.push(sum);
	x++;
	y++;
}
document.write(arr);