let k = prompt("Qani tiv pti ?");
if(k<2)alert('Tver@ petq 2-ic shat linen');
let arr = [];
let abb = [];
let akk = [];//index
let before;
let after;
for(let i = 0;i<k;i++){
	let x = Math.floor(Math.random()*10);
	arr[i]=x;
}
for(let i = 1;i<k;i++){
	before = i-1;
	after = i+1;
	if(arr[before]>arr[after]){
		if( (arr[before]/arr[after])>2 ) abb.push(arr[i]), akk.push(i);
	}
	if(arr[after]>arr[before]){
		if( (arr[after]/arr[before])>2 ) abb.push(arr[i]), akk.push(i);
	}
}
document.write('Tver - ' + arr + '<br />');
document.write('Tver@ voronc harevanner@ 2 angamic shaten tarbervumen iraric - ' + abb + '(' + akk +')');