// Q1. Count vowels in a string

let VowelLetters='aeiouAEIU'
let checkVowelsCount=(str)=>{
    let count=0
    for(let v of str){
        if(VowelLetters.includes(v)){
            console.log(v); // e,o,e,o,i,i,i
            count++;
            
        }
    }
    return count
}
console.log(checkVowelsCount("welcometowssiii"))//7 vowels





//Q2 find factorial of a number
let factorial=(x)=>{
    let fac=1
    for(let i=1;i<=x;i++){
        fac=fac*i
    }
    return fac
} 
let ans=factorial(5);
console.log(ans); // 120 output
