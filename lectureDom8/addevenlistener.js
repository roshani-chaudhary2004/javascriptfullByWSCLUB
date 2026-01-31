//addEventListener
//without use of (onClick) event
let inputElementpassword=document.querySelector("#pass")
let inputElementBtn=document.querySelector("#btn")// click karna hai
inputElementBtn.addEventListener("click",()=>{
     if(inputElementBtn.innerHTML=="show"){
        inputElementpassword.type="text" //password convert text
        inputElementBtn.innerHTML="hide"
    }
    else{
        inputElementpassword.type="password" //  convert password
        inputElementBtn.innerHTML="show"
    }
    
})