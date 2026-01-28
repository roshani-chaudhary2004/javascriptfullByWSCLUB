
//LOOPT LECTURE.3
//# FOR LOOP
for(let i=1;i<=10;i++){
    console.log("welcome roshani");
    }
//#
    for(let i=10;i>=1;i--){
    console.log("welcome roshani");
    }


// note
//# var print kardeta value
for(var i=1;i<=10;i++){
    console.log("welcome roshani");
    }
    console.log(i); // iski values 11 hogi

//# var print kar deta values
    for(var i=10;i>=1;i--){
    console.log("welcome roshani");
    }
    console.log(i); // output zero hoga
    
// print even values
for(let j=1;j<=100;j++){
    if(j%2==0){
        console.log(j);
        
    }else{
        console.log(j);
    }}

// 2 gap print number
for(let i=2;i<=100;i=i+2){
    console.log(i);
    }





// WHILE LOOP
let s=1;
while(s<=10){
    console.log(s,"welcome");
    i++;
    }

    console.log(s) // output 11


// do while loop
let b=1;
do{
    console.log(b);
    b++
    }
while(s<=10) // isme pahle values peint hoti jo hmm diye hote phir increment karta





// break keyword
for(let i=1;i<=10;i++){
    if(i==5){
        break;
    }
    console.log(i,"welcome");// output 1,2,3,4
    
}


// continue keyword
for(let i=1;i<=10;i++){
    if(i==3||i==9){
        continue;
    }
    console.log(i,"welcome"); // output 1,2,4,5,6,7,8,10
    
}





// for.....of loop
//#1
let w="roshani";
for(let v of w){
    console.log(v);
    
}

//#2
let l=[10,20,30,40,50]
for(let v of l){
    console.log(v);
    
}




//for.....in loop
let j=[10,20,30,40,50]
for(let k in j){
    console.log(k); // output index ki values degi 1,2,3,4,5
}

//#1
let user={
    'name':'pradeep',
    'cname':'ws'

}
for(let userKey in user){
    console.log(userKey); // key ki values deta : name and cname
     console.log(user[userKey]); // values deta pradeep,ws
    
}


//Q.1 print table of 2
for(let i=1;i<=10;i++){
    console.log(`2*${i}=i*2`);
    

}





// sum of 1 to 10 number
let sum=0
for(let i=1;i<=10;i++){
    sum+=i;
    }
    console.log(sum);
    
// nested loop
for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        console.log(`${i}* ${j}=${i*j}`);   //1*1=1, 1*2=2, 1*3=3 ,2*1=2, 2*2=4, 2*3=6 ,3*1=3, 3*2=6 ,3*3=9 

        
    }
}


//  print * increasing order
for(let i=1;i<=7;i++){
    for(let j=1;i<=i;j++){
        console.log("*");
        
    
}

}

