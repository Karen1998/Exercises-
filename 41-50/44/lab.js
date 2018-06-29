function foo(){
	let numb = document.getElementById('number').value;
	let answer = document.getElementById('answer');
	let numbers = document.getElementById('Array');
	let counter_1 = 0;
	let counter_2 = 0;
	let arr = [];
	let abb = [];
	let akk = [];
	let x;
	for(let i=0;i<numb;i++){
		x = Math.round(Math.random()*20);
		arr.push(x),abb.push(x),akk.push(x);
	}
	for(let i=0;i<numb;i++){
		for(let j=0;j<numb;j++){
			if(abb[i]<abb[j]){
				let y = abb[i];
				abb[i] = abb[j];
				abb[j] = y;
			}
			if(akk[i]>akk[j]){
				let z = akk[i];
				akk[i] = akk[j];
				akk[j] = z;
			}
		}
	}
	for(let i=0;i<numb;i++){
		if(arr[i]==abb[i]){
			counter_1++;
		}
		if(arr[i]==akk[i]){
			counter_2++;
		}
	}
	console.log(arr);
	console.log(numb);
	console.log(abb);
	console.log(counter_1);
	console.log(akk);
	console.log(counter_2);

	numbers.innerHTML = arr;
	
	if(counter_1==numb){
		answer.innerHTML = 'Tver@ achman kargoven generacvel ';
	}else if(counter_2==numb){
		answer.innerHTML = 'Tver@ nvazman kargoven generacvel ';
	}else{
		answer.innerHTML = 'Tver@ ankanon kargoven generacvel';
	}
}
