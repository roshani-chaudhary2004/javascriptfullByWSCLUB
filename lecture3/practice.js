//Q1. print even num between 1 to 50

for(let i=1;i<=50;i++){
    if(i%2==0){
        console.log(i);
        
    }else{
        console.log("odd num");
        
    }
}



//O2. print reverse number from 20 to 1
for(let i=20;i>=1;i--){
    console.log(i);
}


//Q3 print a number prim or not
let userin=Number(prompt("Enter the number"))
let midValue=parseInt(userin/2 ) // 25/2=12.5=

isPrime=true;
for(let s=2;s<=midValue;s++){
    if(userin%s==0){
        isPrime=false;
        break;
    }
    }

if(isPrime){console.log("prime no");
}else{
    console.log("not a prime");
    
}


//Q. let a number 28 and find its divisors(1,2,4,7,14) and sum=1+2+4+7+14=28 then number is perfect number
let ros=Number(prompt("Enter the number"));
let midval=parseInt(ros/2);
let sum=0;
for(let i=1;i<=midval;i++){
    if(ros%i==0){
        sum +=i
    }
}
if(sum==ros){
    console.log(midval,sum ,"are equal then perfect number");
}else{
        console.log(midval,sum ,"are not equal then not perfect number");
}


//Q   1234----convert 4321 using while loop

let n=Number(prompt("Enter the number"))
let revNumber=0

while(n>0){
    let lastDigit=n%10
    revNumber=revNumber*10+lastDigit;
    n=parseInt(n/10)

}
console.log(revNumber); // reverse number



//Q.2    print num 1,2 3, 4 5 6,7 8 9 10 in a pyramid form
let count = 1;

for(let i = 1; i <= 4; i++) {

    let line = "";

    for(let j = 1; j <= i; j++) {
        line = line + count + " ";
        count++;
    }

    console.log(line);
}

    