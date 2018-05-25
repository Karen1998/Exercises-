let k = prompt('Mut areq massivi erkarutyn@');
let z = 0;
let arr = [];
for(let i=0; i<k; i++){
	let x = Math.round(Math.random()*100);
	arr[i] = x;
	if(i%2==0){
		z+=x;
	}
}
document.write(arr + '<br />');
document.write('Zuig indexof tveri gumar@ - ' + z);



// let k = prompt('Mut areq massivi erkarutyn@');
// let z = 0;
// let arr = [];
// let number = document.getElementById('exp');
// for(i=0; i<k; i++){
// 	let x = Math.round(Math.random()*100);
// 	arr[i] = x;
// 	number.innerHTML+=x+' ';
// 	if(i%2==0){
// 		z+=x;
// 		number.style.color = 'red';
// 	}
// }
// document.write(arr + '<br />');
// document.write('Zuig indexof tveri gumar@ - ' + z);