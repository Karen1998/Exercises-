let arr = [];
let k = prompt('0-ic michev for tiv@ hashvi?');
for(let i=0; i<=k; i++){
	arr.unshift(i);
}
for(let j=k; j>=0; j--){ //(k-1)
	arr.unshift(j);
}
document.write(arr);