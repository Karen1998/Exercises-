function foo () {
	let numb = document.getElementById('number').value;
	let answer = document.getElementById('answer');
	let answer_1 = document.getElementById('answer_1');
	let answer_2 = document.getElementById('answer_2');
	let arr = [];
	let arithmetic = 0;
	let geometry = 0;
	let count_ar = 0;
	let count_geo = 0;
	for(let i = 0;i<numb;i++){
		let x = Math.floor(Math.random()*15);
		arr[i]=x;
	}
	if(arr[0]>arr[1]){
		var d = arr[1]-arr[0];
		var g = arr[1]/arr[0];
	}else if(arr[1]>arr[0]){
		var d = arr[1]-arr[0];
		var g = arr[1]/arr[0];
	}
	if(arr[0]==arr[1]) return alert('error');
	for(let i = 0;i<=numb;i++){
		for(let j = i+1;j<numb;j++){
			if(arr[j] == d + arr[i]){
				count_ar++;
				break
			}
		}
		for(let j = i+1;j<numb;j++){
			if(arr[j]/arr[i]==g){
				count_geo++;
				break
			}
		}
	}
	answer.innerHTML = arr;
	if(count_ar == +numb-1){
		answer_1.innerHTML +='<span style="color:red">' + 'KA' + '</span>';
	}else {
		answer_1.innerHTML +='<span style="color:red">' + 'chka' + '</span>';
	}
	if(count_geo== +numb-1){
		answer_2.innerHTML +='<span style="color:red">' + 'KA' + '</span>';
	}else {
		answer_2.innerHTML +='<span style="color:red">' + 'chka' + '</span>';
	}

}