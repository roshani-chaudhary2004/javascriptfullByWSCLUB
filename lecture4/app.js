//LECTURE 4
//ARRAY TOPIC


let users=["ram","rohan","raj"]
console.log(users[0]); // output ram

let l=[10,20,30,[1,2,3,4]]
console.log(l[3]);  // output [1,2,3,4]-index3
console.log(l[3][1]); //output 2-- index 1
 // ITERATION IN ARRAY
 //METHOD1.   USING for loop
 let n=["ram","ravi ","raj",20,39]
 let t=n.length // length=5
 for(let i=0;i<=t;i++){
    console.log(i,n[i]); // i index deta hai aur n[i]--- values dega(ram,ravi,raj,20,30)
    }


    // reverse in loop
    let m=["ram","ravi ","raj",20,39]
 let t1=n.length // length=5
 for(let i=t1-1;i>0;i--){
    console.log(i,n[i]);   // output reverse dega(30,20,raj,ravi,ram)
 }


  //METHOD 2.   USING for.. OF LOOP
  let k=[10,20,30,40,50]
  s=k.length; //5
  for(let val of k){

    console.log(val); // output -- 10,20,30,40,50
    
  }

   //METHOD 3.   USING for... in loop
   let h=[10,20,30,40,50]
  s=h.length; //5
  for(let val in h){

    console.log(val); // output - index values dega--0,1,2,3,4
     console.log(h[val]); // output -- 10,20,30,40,50
    
  }

// sum of given array [10,20,30,40,50,99]
let r=[10,20,30,40,50,99];
let sum=0;
for(let i in r){
    sum=sum+r[i];
}
console.log(sum);


// question
let f=[10,20,23,55,99,77,66,44,56,21]
for(let v of f){
    if(v%2==0){
        console.log(v); // output 10,20,66,44,56
        
    }
}

// update array of values in any index

let num=[1,2,3,4]
console.log(num); // output 1,2,3,4

num[1]=30; // update
console.log(num); // output 1,30,3,4







