let arr = [];
let k = prompt("Minchev vor tiv@ hashvi?");

if(k>=1){
		arr.push(1);
	 		if(k>=7){
				arr.push(7);
				}
	}

for(let i=2; i<=k; i++){
	if(i%2==1){
		if(i%3==0 || i%5==0 || i%7==0){}
			else {
				arr.push(i);
			}
	}
}
document.write(arr);