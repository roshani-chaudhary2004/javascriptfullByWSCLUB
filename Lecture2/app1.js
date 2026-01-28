
// operator


console.log(5**3);// 125
//ARITHMATIC OPERATOR
// swapping of values
let a=10
let b=20
console.log("a",a);
console.log("b",b);
let temp=a; //  temp=10
a=b// a=20
b=temp// b=temp
// swapping of values without use of another values
let m=2
let n=9
 m=m+n //2+9=11
 n=m-n //11-9=2 
 m=m-n// 11-9=9

 //ASSIGNMENT OPERATOR
 let x=10
 let y=10
 console.log(a==b); //10==10 true
 console.log(a=='10') // true number and string ka comparison always true hota

 console.log(a==='10'); // ye equal aur data type dono ka comparision karta OUTPUT is FALSE
 console.log(a===b); //true
 console.log(a!==b) // 10!==10
 

 // logical operator
 let userName='code'
 let password='123'
 console.log(userName=='code'&& password=='1234');// false( dono condition true hona chaiye)
 console.log(10==20|| 10<20); // true(koi ek condition true hone par true values deta hai)
 
 
// string operator 
let str="roshani"
let str1="ch"
str +=chaudhary
console.log(str) //roshani chaudhary
console.log(10+"hii"); //10hii
//ternary operator
let age=Number(prompt("Enter the values:--"))//qestion marks ek ternary operator hai
let res=age>=18 ? "adult":"minor";//(?) qu
console.log(res); //output adult


let num1=Number(prompt("Enter the Number1")); //50
let num2=Number(prompt("Enter the Number2")); //40
let result=(num1>num2) ? `num1 ${num1} is greater than num2 ${num2}`:`num1 ${num1} is less than num2 ${num2}`;
console.log(result);


// CONDITIONAL STATEMENT
if(true){
    console.log("hii roshani")
}


let score=70
if(score>60){
    console.log("you passed");
} 


// Q1. print the even odd number

let n1=Number(prompt("Enter the value:"));
if(n1%2==0)
{
    console.log("this is even number");
    
}else{
    console.log("this is odd number");
    
}

// if   else if....else condition
let gradScore=Number(prompt("Enter the  grad value:"));
if(gradScore>=90)
{
    console.log("A grad");
    
}else if(gradScore>=75){
    console.log("B grad");
    
}
else if(gradScore>=60){
    console.log("c grad");
    
}else{
    console.log("fail in all subject");
    
}


// NESTED if.....else CONDITION
let user1Name="admin"
let password1="12345"
let userNameInput=prompt("Enter the userName");

if(userNameInput== user1Name){
    let userpassInput=prompt("Enter the userName");
    if(userpassInput==password1){
        console.log("Login done");
    }
    else{
        console.log("plesae fill correct password");
        
    }
     
}else{
    console.log("please fill correct userName");
    
}




// SWITCH CASE

let lights="yellow";
switch(lights){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("ready");  // ye hai ans output ready
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("Invalid signal");
        }



// Make a simple Calculator Operator
let m1=Number(prompt("Enter the values"));
let m2=Number(prompt("Enter the values"));
let ope=prompt(
    `
    1 ADD (+)
    2 Sub (-)
    3 Mul (*)
    4 Div (/)
    `
)

switch(ope){
    case "+":
        console.log(m1+m2);
        break;
    case "-":
        console.log(m1-m2);
         break;
    case "*":
        console.log(m1*m2);
         break;
    case "/":
        console.log(m1/m2);
         break;
    default:
        console.log("invalid operation");
         break;
        }





//Q2. check if a user entered a number greater than 100?
      let usernum=Number(prompt("Enter the number"));
      if(user1Name>100){
        console.log("greather than 100");
        
      }else{
        console.log("less than 100");
        
      }

// check if a year is a leeap year

 let printleapyear=Number(prompt("Enter the number"));
      if(printleapyear%4==0 &&printleapyear%100!==0 ||printleapyear%400==0 ){ // important
        console.log("this is leap year");
        
      }else{
        console.log("no this is not leap year");
        
      }



//Q.3  

let postivenumber=Number(prompt("Enter the number"));
if(postivenumber>0){
    if(postivenumber%2==0){
        console.log("positive even number");
        
    }else{
        console.log("positive odd number");
        
    }

}else if(postivenumber==0){
    console.log("zero");
    
}else{
    console.log("negative number");
    
}



//Q.4  online shopping discount logic(amount>1000)20% discount and if (amount>500) 10% discount and no dicount
 let printnum=Number(prompt("Enter the number"));
 if(printnum>1000){
    console.log("i get 20% dicount");
    }
else if(printnum>500){
    console.log("i get 10% dicount");
    }
    else{
        console.log("no discount found");
        
    }



// Q.4 weather report tempreature (tem>35)very hot........

let temprature=Number(prompt("Enter the tem"));
if(temprature>35){
    console.log("very hot");
    }
else if(25<temprature<35){
    console.log("hot");
    
}
else if(15<temprature<25){
    console.log("pleasnt");
    
}
else if(5<temprature<15){
    console.log("cold");
    
}
else if(temprature<5){
    console.log("very cold");
    
}



// Q.6  print the valves : Atm action menu,check balance,withdraw,deposit,exit
let amount=Number(prompt(
    `
    1 Atm action menu
    2 check balance
    3 4withdraw
    4 deposit
    5 exit
 `
));
switch(amount){
    case "1":
        console.log("check banalce");
        break;
    case "2":
        console.log("Atm action menu");
        break;
    case "3":
        console.log("4withdraw");
        break;
    case "4":
        console.log("deposit");
        break;
    case "5":
        console.log("exit");
        break;
    default:
        console.log("no anyone passed");
        
    }







