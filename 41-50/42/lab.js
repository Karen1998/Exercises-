function foo () {
	let numb = document.getElementById('number').value;
	let answer = document.getElementById('answer');
	let answer_1 = document.getElementById('answer_1');
	let answer_2 = document.getElementById('answer_2');
	let arr = [];
	let count = 0;
	for(let i = 0;i<=numb;i++){
		let x = Math.round(Math.random()*10);
		arr[i]=x;
	}
	let len = arr.length;
	for(let i = 0;i<=len;i++){
		for(let j = 0;j<=len;j++){
			if(i==arr[j]){
				count++;
				break;
			}
		}
	}
	answer.innerHTML = arr + '<br />';
	if(count== +numb+1) answer_1.innerHTML = '0-ic minchev dzer tiv@ bolor tver@ ka';
	else answer_2.innerHTML =  'pordzeq krkin';
}
