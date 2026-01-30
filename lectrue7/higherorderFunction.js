// map() method

let l=[10,20,30,40,50]

l.map((values,index)=>{
    console.log(values,index); // output 10,0
                               //        20,1
                               //        30,2
                               //        40,3
                               //        50,4
})

//#
let a=[10,20,30,40,50]

let mapFinalArray=a.map((values,index)=>{
    return values+5

})

console.log(mapFinalArray); // output= [15,25,35,45,55]
                               


// without use of curly bracket(koi return values nhi deta automatic return ho jata)

let n=[10,20,30,40,50]

let mapFinal=n.map((val)=>val*2)
    

console.log(mapFinal); // output= [20,40,60,80,100]
                               

// 2nd method
let n1=[10,20,30,40,50]

let callback=(val)=>val**2;
let square=n1.map(callback)
    

console.log(square); // output= [100,400,900,1600,2500]
                               





// filter method(filter karke values deta aur isme condition me use hota)
//#
let ages=[12,39,18,67,4]
let adult=ages.filter(age =>age>=18);
console.log(adult); // output 39,18,67

//#  

let m=[10,20,30,40,50,9,3,18,27]
let diviableBY=m.filter((val)=>{
    if(val%3==0){
        return true;
    }
})
console.log(diviableBY); // output 30,9,3,18,27







//Q1
let user=[
    {
        name:"roshani",
        age:21
    },
    {
        name:"rosh",
        age:12
    },
    {
        name:"raj",
        age:29
    },
    {
        name:"roshani",
        age:21
    },
    {
        name:"rashma",
        age:90
    }
]

let filterUser=user.filter((obj)=>obj>=18)
console.log(filterUser);//output 21,29,21,90


// reduce() method---(saari vali ko add or single values me convertkar deta hai)

let w=[10,20,30,40]
let totalsum=w.reduce((sum,value)=>sum+Number,0)
console.log(totalsum);// sum=100




// find()--- jo values condition se sabse pahle match karti hai vahi sabse pahle aur vahi bas print hoti values


let alleven=[2,4,6,8]
let printfirsteven=alleven.find(num=>num%2==0)
console.log(printfirsteven); // 2(because 2 sabse pahle match huya hai condition se)


// forEach() method(koi values return nahi karta sirf array ke element ko print karta)
let v=[
    {
        name:"roshani",
        age:21
    },
    {
        name:"rosh",
        age:12
    },
    {
        name:"raj",
        age:29
    },
    {
        name:"roshani",
        age:21
    },
    {
        name:"rashma",
        age:90
    }
]
v.forEach((val,index)=>{
    console.log(index,val.name,val.age); // print name and age ki value
    // 0 'roshani' 21
    // 1 'rosh' 12
    // 2  raj  29
    // 3 roshani 21
    // 4 rashma 90
})