// lecture5
//FUNCTION

//1. user defined function
//#
function disPlayData (){
    document.write("hoo roshani")
}
disPlayData() // function kon call kiya  then output --hoo roshani




//#
function add(){
    console.log(10+30);
    }
add() // function kom call kar diy then OUTPUT-40




 //#
    function val(username){
    console.log(`hii roshani i am ${username}`);
    }
val(ravi); // call kiya then output-- hii roshani i am ravi



//# 
function b(x,y){
    console.log(x+y);
}
b(20,38) // call kiya then outpt=58



//# 
function b(x,y=2){ // y is a default parameter
    console.log(x+y);
}
b(20) // call kiya then outpt=22


//# 
function b(x,y=1){ // y li values 1 nahi hoga 38 hoga
    console.log(x+y);
}
b(20,38) // call kiya then outpt=58



//# 
function printarray(...allParams){ // ... ye ek sprad operator hai(jo saare values ko collect karke array me convert karta)
    console.log(allParams);
}
printarray(20,38,77,88) // call kiya then outpt array form me dega-[20,38,77,88]




// using return keyword
function addval(x,y){
    return x+y;
}
let result=addval(2,5);
console.log(result); // output 7


//Q1
function taxCal(price){
    return price*.10
}
let productPrice=50000
let total=taxCal(productPrice)+productPrice
console.log(total); // output 55000




// Anonymous function(jiska koi naam na ho aur vo variable me stored ho)

let display=function(){
    console.log("welcome");
    
}
display() // output welcome



// Callback function
function addData(num1,num2){
    return num1+num2
}
function minData(num1,num2){
    return num1-num2
}
function calculate(num1,num2,Callback){
    console.log(num1);//10
     console.log(num2);//20
      console.log(Callback(num1,num2));//30
    

}
calculate(10,20,addData)//call huya





// Arrow function
//#
let adddData=()=>{
    console.log("hoo ros");
}
addData() // call

//#
let addData=(n,m)=>{
    return n+m
}
console.log(addData(1,3)); // output 4


//# importanted
let addData=(n,m)=>n+m // without using {} and return keyword
console.log(addData(1,3)); // output 4

//#
 let square=x=>x*x
 console.log(square(5)); // output 25
 

 // Q count  the word in the sentence
// method1.
 function checkWordCount(str){
    return(str.split("").length);
    

 }
 let n=checkWordCount("hii roshani chaudhary")
 console.log(l); // total no of word 3
 
// method2.
function checkWordCount(str){
    let word=1;
    for(let v of str){
        if(v==" "){
            word++;
    }
}

 return word;
}
 let =checkWordCount("hii roshani chaudhary")
 console.log(l); // total no of word 3