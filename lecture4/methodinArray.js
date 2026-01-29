//METHOD
//1. PUSH
let l=[1,2,3,4,5,6]
l.push(99);
console.log(l); // output 1,2,3,4,5,6,99

//2. pop method
let a=[1,2,3,4,5,6,99]
a.pop();
console.log(a); // output 1,2,3,4,5,6(delete 99 values)


//3. shift method
let b=[1,2,3,4,5,6,99]
b.shift(); // starting me data delete
console.log(b); // output 2,3,4,5,6(delete 1 values)

//4. Unshift method
let c=[1,2,3,4,5,6,99]
c.unshift(8); // starting me data add
console.log(c); // output 8,1,2,3,4,5,6(8 add in start)

//4. sort method
let k=[3,5,9,4,2,1,0,9,7];
k.sort()
console.log(k); // output 0,1,2,3,4,5,7,9,9

//5. revese method
let i=[3,5,9,4,2,1,0,9,7];
i.reverse()
console.log(i); // output 7,9,0,1,4,9,5,3

//6. fill method
let j=[3,5,9,4,2,1,0,9,7];
j.fill(5)
console.log(j); // output 5,5,5,5,5,5,5,5,5
 j.fill(5,0,2) // ouput 5 ,5,9,4,2,1,0,9,7



 // Ques1.
 let m=[1,2,3,4]
 for(let v of m){
    m.pop()
 }
 console.log(); //output-- round1[1,2,3]
                //         round2[1,2]
 
// OUES.2
let w=[1,2,3,4]
for(let v of w){
    w[3]=v
}
console.log(w);  // output   round1 w[3]=1 [1,2,3,1]
                //            round1 w[3]=2 [1,2,3,2]
                //             round1 w[3]=3 [1,2,3,3]
                //              round1 w[3]=3 [1,2,3,3]



// Slice() method
 let p=[1,2,3,4,5,6];
let newArray=p.slice(1,4) // index 1to 3 tak abs values
console.log(newArray); // output 2,3,4



// concat() method
 let p1=[1,2,3,4,5,6];
 let p2=[1,8,3,9,5,7];
let finalarray=p1.concat(p2);
console.log(finalarray); // output 1,2,3,4,5,6,1,8,3,9,5,


// includes() method
let p3=[1,2,3,4,5,6];
let s=p3.includes(6)
console.log(s); // output: true


// indexOf() method(index btata hai)
let p6=[1,2,3,4,5,6];
console.log(p6.indexOf(2)); // give values of index 2 values index 1 pe hai


// join() method(array to convert string)
let n=[1,2,3,4,5,6];
let joinString=n.join(",") // " " iske bich me kuch bhi likh do , or _ kuch bhi
console.log(joinString);  // 1,2,3,4,5,6


// toString()
let e=[1,2,3,4,5,6];
let joinString1=e.toString()  
console.log(joinString);  // 1,2,3,4,5,6 YE HAMESHA , ME ARRAY KE VALUES KO SEPARATE KARTA
