//# h1 ka pura tag print karta
let headingElement=document.getElementById("heading") 
console.log(headingElement);// <h1>hii roshani how are you</h1>

//# inner values print karega h2 ka
let element=document.getElementById(para);
console.log(element.innerHTML);//hii roshani<u>how are</u>you
console.log(element.innerText);//hii roshani how are you

//#
let input=document.querySelector("#num")  // #num for use id and .num ka use class ke liye hota
console.log(input); // pura input ka code aa jayega
console.log(input.placeholder);

//#
let allLiElement=document.querySelectorAll("li")
console.log(allLiElement); // saari li ki tag ki values ko acces kar raha
console.log(allLiElement[0].innerhtml)//html
console.log(allLiElement[1].innerhtml) // css
console.log(allLiElement[2].innerhtml) // js
console.log(allLiElement[3].innerhtml) // react


//use of forEach'
allLiElement.forEach((item,index)=>{
console.log(item.innerHTML);// sarre li tag ka code aa jayeg

})





