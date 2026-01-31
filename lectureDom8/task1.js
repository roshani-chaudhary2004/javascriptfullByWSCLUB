// onclick event


let inputElementpassword=document.querySelector("#pass")
let inputElementBtn=document.querySelector("#btn")
function showHidePassword(){
    if(inputElementBtn.innerHTML=="show"){
        inputElementpassword.type="text" //password convert text
        inputElementBtn.innerHTML="hide"
    }
    else{
        inputElementpassword.type="password" //  convert password
        inputElementBtn.innerHTML="show"
    }
    
}