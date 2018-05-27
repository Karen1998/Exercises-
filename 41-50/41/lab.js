function foo () {
	let numb = document.getElementById('number').value;
	let tver = document.getElementById('Tver');
	let answer = document.getElementById('answer');
	let arr = [];
	let abb = [];
	let pow = 0;
	let max;
	let before;
	let after;
	for(let i = 0;i<numb;i++){
		let x_1 = Math.floor(Math.random()*30);
		let x_2 = Math.floor(Math.random()*10);
		if(i%2==0) arr[i]=x_2;
		if(i%2==1) arr[i]=x_1;
	}
	for(let i = 1;i<numb;i++){
		if(arr[i]>max) max = arr[i];//maximum
		before = i-1;
		after = i+1;
		max = arr[0];
		pow = Math.pow(arr[before],2)+Math.pow(arr[after],2);
		if(max != arr[i] && pow==arr[i]) abb.push(arr[i]);
	}
	tver.innerHTML = 'Tver - ' + arr + '<br />' ;
	answer.innerHTML = abb ;
}
