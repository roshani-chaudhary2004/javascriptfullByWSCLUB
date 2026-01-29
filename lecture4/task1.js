// Q1. give two array find same or common element
let a=[1,2,3,4,5,6]
let b=[1,4,5,6,7,8]
for(let v of a){
    if(b.includes(v)){
        console.log(v); // output 1,4,5,6
        

    }
}

//Q2 REMOVE DUPLICATE ELEMENT
let a1=[1,2,3,4,5,6,99,80,6,7,4,3,1]
let finalArray=[]
for(let v of l){
    if(!finalArray.includes(v)){
        finalArray.push(v)
    }

}
console.log(finalArray); //  output - 1,2,3,4,5,6,99,80,7
//[].includes(1) → false  → add → finalArray = [1]
//[1].includes(2) → false → add → finalArray = [1,2]
//[1,2].includes(3) → false → add → finalArray = [1,2,3]
//[1,2,3].includes(4) → false → add → finalArray = [1,2,3,4]
//[1,2,3,4].includes(5) → false → add → finalArray = [1,2,3,4,5]
//[1,2,3,4,5].includes(6) → false → add → finalArray = [1,2,3,4,5,6]
//[1,2,3,4,5,6].includes(99) → false → add → finalArray = [1,2,3,4,5,6,99]
//[1,2,3,4,5,6,99].includes(80) → false → add → finalArray = [1,2,3,4,5,6,99,80]
//[1,2,3,4,5,6,99,80].includes(6) → true → skip
//[1,2,3,4,5,6,99,80].includes(7) → false → add → finalArray = [1,2,3,4,5,6,99,80,7]
//[1,2,3,4,5,6,99,80,7].includes(4) → true → skip
//[1,2,3,4,5,6,99,80,7].includes(3) → true → skip
//[1,2,3,4,5,6,99,80,7].includes(1) → true → skip



//Q.3 find the maximum values in the array of values
let val=[88,99,77,88,55]
let maxValue=val[0]
for(let v of val){
    if(v>maxValue){
        maxValue=v
    }
}
console.log(maxValue); // output 99 maxvalues
// Round 1 :88 > 88 → false → maxValue = 88
// Round 2 :99 > 88 → true  → maxValue = 99
// Round 3: 77 > 99 → false → maxValue = 99
// Round 4: 88 > 99 → false → maxValue = 99
// Round 5 :55 > 99 → false → maxValue = 99




//Q4. revese the array
let z=[88,99,77,88,55]
let finalArray1=[]
for(let k of z){
    finalArray1.unshift(v)// starting se values ko nikalta
}
console.log(finalArray1);// 55,88,77,99,88 reverse array
// let finalArray = [88]
// let finalArray = [99, 88]
// let finalArray = [77, 99, 88]
// let finalArray = [88, 77, 99, 88]
// let finalArray = [55, 88, 77, 99, 88]




