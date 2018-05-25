//Erevi aveli hesht dzev ka
let k = prompt('Qani tiv tpi ?');
let number = prompt('Mut areq dzer uzuc tiv@ ');
let arr = [];
let abb = [];
let answer;
for(let i = 0; i<k; i++){
	let x = Math.floor(Math.random()*30);
	arr[i]=x;
}
let len_1 = arr.length;
let sum = 0;
for(let i = 0; i<len_1; i++){
	for(let j = i+1; j<len_1; j++){
		sum = arr[i]+arr[j];
		abb.push(sum);
		if(sum == number){
			alert('Ham@kav! ' + sum +' = '+ number);
			break;
		}
	}
}
let min = abb[0];
let max = abb[0];
let count_1 = 0;
let count_2 = 0;
let len_2 = abb.length;
for(let i = 0; i<len_2; i++){
	if(abb[i]<min) min = abb[i];
	if(abb[i]>max) max = abb[i];
}
for(let i = 0; i<len_2; i++){
	if(abb[i]>number && abb[i]<=max){
		max = abb[i];
		count_2++;
	}else if(abb[i]<number && abb[i]>=min){
		min = abb[i];
		count_1++;
	}
}
if(max-number<number-min){
	answer = max;
}else if (number-min<max-number) {
	answer = min;
}else {
	answer = min;
}
if(count_1 == 0){min = 0,max = answer}
if(count_2 == 0){max = 0,min = answer}
// console.log(arr);
// console.log(abb);
// console.log(number);
// console.log(max);
// console.log(min);
document.write('Tver - ' + arr + '<br />');
document.write('Tveri gumar@ - ' + abb + '<br />');
document.write('Dzer tiv@ - ' + number + '<br />');
document.write('Amena motik tiv@ - ' + answer);