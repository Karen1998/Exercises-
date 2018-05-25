let run = document.getElementById('run');
function foo () {
	// Math.floor(Math.random() * (max - min + 1)) + min
	 	let k = Math.floor(Math.random()*41) + 30;//30-ic 70
		let arr = [];
		let one = 0;
		let two = 0;
		let three = 0;
		let all = 0;
		let h = Math.floor(Math.random()*3) + 3;// 5 - 3 mijakaiq
		for(let i=0; i<k; i++){
			let x = Math.floor(Math.random()*7)+4;//4-ic 10
			arr[i] = x;
			all+=1;
		}
		for(let i=0; i<k-25; i++){
			let x = Math.floor(Math.random()*((k-1)-0+1))+0;
			arr[x] = 3;
		}
		for(let i=0; i<k-20; i++){
			let x = Math.floor(Math.random()*((k-1)-0+1))+0;
			arr[x] = 2;
		}
		for(let i=0; i<h; i++){
			let x  = Math.floor(Math.random()*((k-1)-0+1))+0;
			arr[x] = 1;
			one+=1;
		}
		for(let i=0; i<k; i++){
			if(arr[i]==3){
				three+=1;
			}else if(arr[i]==2){
				two+=1;
			}
		}
		document.write('Tver - ' + arr + '<br />');
		document.write('Tver- qanak@ - ' + all + '<br />');
		document.write('Mek tiv@ krknvec - ' + one +' angam ' +'<br />');
		document.write('Erku tiv@ krknvec - ' + two +' angam ' +'<br />');
		document.write('Erek tiv@ krknvec - ' + three +' angam ' +'<br />');
}