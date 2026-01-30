//OBJECT

let user={
    userEmail:"pradeep@.com",
    userPhnoe:88888888,
    userStatus:true,
    userAddress:"jodhpur",
    1:10
}
// two types se data ki values ko accesss kar sakte
console.log(user.userEmail);//pradeep@.com
console.log(user['userEmail']);//pradeep@.com (same output)
// console.log(user.1);// wrong ayeha kyuki number hai
console.log(user['1']); // output 10

// add key and values

user.age=32 // same as--  user.['age]
console.log(user); // user me age add ho jayegi

// update user key of values
user.userEmail="roshani@.com"
console.log(user); // userEmail update


//Destructing
let{userEmail,userAddress}=user;
console.log(userEmail,userAddress);  //values deta hai

// agr key ki values ko update kar de
let{userEmail:email}=user;
console.log(email); // userEmail ki key update hokar email ho jayegi




//Q1 important
let name='roshani';
let user={
    age:21,
    address:lucknow,
    name,
}
console.log(user); // isme name naam ki key ki values roshani aa jayegi user me


//Rest  operators(...)
let user={
    userEmail:"pradeep@.com",
    userPhnoe:88888888,
    userStatus:true,
    userAddress:"jodhpur",
    1:10
}
//deconstructor
let(userEmail,...rest)=user
console.log(userEmail); // output --pradeep@.com
console.log(rest);//output- userPhnoe:88888888,
                 //      userStatus:true,
                 //        userAddress:"jodhpur",
                 //            1:10






//nested destructuring with objects in javascript
let val={
    name:"roshani",
    address:{
        city:lucknow,
        country:"india"
    }
};

let{address:{city,country}}=val;
console.log(city);      // lucknow
console.log(country);   // india






//destructuring in array
let totalArray=["a","b","c","d"];
let[first,second,third,ros]=totalArray;
console.log(first);// a
console.log(second);// b
console.log(third);// c
console.log(ros); // d


// Skipping item
let l=[10,20,30,40]
let[, ,a]=l;// 10,20 ko leave karke 30 ko print karo
console.log(a);// 30


// sprad operator(...) agr data array ho to array deta aur object ho to oject deta values
let b=[10,20,30,40]
let[j,...res]=l;
console.log(j);// 10
console.log(res); //output--[20,30,40]


//deep copy(behaviour and under ki data dono ko copy karta)
let r=[1,2,3,4]
let m=r //deep copy huya
console.log(m); // 1,2,3,4
console.log(l); //1,2,3,4
m.push(36);
//after updation l and m dono me data add hoga
console.log(m);// 1,2,3,4,36
console.log(l);// 1,2,3,4,36



// shallow copy(  agr e ko update kar rahe only e hi update hoga)
let e=[1,2,3,4,5]
let n=[...e] //shallow copy
console.log(e); //1,2,3,4,5
console.log(n); // 1,2,3,4,5
n.push(36);
console.log(n); // 1,2,3,4,5,36
console.log(e); //1,2,3,4,5




