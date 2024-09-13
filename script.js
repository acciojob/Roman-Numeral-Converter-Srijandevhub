function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
let numbers=[]
	let ten=1
	while(num>0){
		rem=num%10
		num=Math.floor(num/10)
		numbers.push(ten*rem)
		ten*=10
	}
	numbers.reverse()
	let objidx=0
	let roman=""
	for(i=0;i<numbers.length;i++){ 
		number=numbers[i]           
		while(number<obj[objidx][1]){  
			objidx++
		}
		firstdig=number/Math.pow(10,numbers.length-i-1)
		if(firstdig==4 && number<1000){
		    roman+=obj[objidx][0]
		    roman+=obj[objidx-1][0]
		}
		else if(firstdig==9 && number<1000){
			roman+=obj[objidx+1][0]
		    roman+=obj[objidx-1][0]
			
		}
		else{
			while(obj[objidx][1]<=number){
			    roman+=obj[objidx][0]
			    number-=obj[objidx][1]
			}
			while(objidx+1<7 && obj[objidx+1][1]<=number){
			    roman+=obj[objidx+1][0]
			    number-=obj[objidx+1][1]
			}
		}
		console.log(firstdig)
	}
	return roman
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
