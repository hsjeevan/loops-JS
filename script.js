console.log("Using for loop")
for(var i=5; i<=50; i++){
	if(i*i%5==0)
		console.log(i);
}
console.log("Using while loop")
var i=5;
while(i<=50){
	if(i*i%5==0)
		console.log(i);
	i++;
}