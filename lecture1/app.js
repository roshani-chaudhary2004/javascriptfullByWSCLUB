  // chapter1
  // VARIABLES
  
  {
    const n=50
    console.log(n); // output 50
    }
    var n=20
    console.log(n); // output 20

    console.log(n) // output undefined(hosting ka kaam karta)
    var n=50
    
      // important

    let r=60;
    console.log(`hii i am rose ${r} chaudhary`);// ouptput hii i am rose 60 chaudhary

    console.log(` 1.Name    2.email`); // multiple  line string ko print karne me bhi kaam ata
    
       


    // DATAtYPES
    let t=20
    console.log(t,typeof(t)); //number

    let w="roshNI";
    console.log(w,typeof(w));//string

    let n=10.5
    console.log(n,typeof(n)); // number

    let n;
    console.log(n,typeof(n)); // undefined datatype

    let status=true;
    console.log(status,typeof(status)); //boolean


    console.log(true+5); // output 6(implicit)-- javascript true ko 1 me convert kar diya (datatype conversion huya)

    let n=null;
    console.log(n,typeof(n)); //  null object type hai


    let p1=Symbol("hello123") //ye alag hai(symbol ka use ek unique banane ka kaam hota hai)
    let p2=Symbol("hello123") //ye alag hai
    
    let l=[10,20,30,40,50] // array
    console.log(l,typof(l)); // aray ka type of object hota


    // defined any object
    let obj={
      name:"pradeep",
      cname:"ws"

    }
    console.log(obj,type(obj)); //iska type object hi hoga
    
    
   // defined function
   function showData(){
      // kuch hoga

   }
   console.log(showData,typeof(showData)); //type function


  // IMPORTANT

  let K=20;
  console.log(K*"40");  // output 800(implicit type conversion)
  
  console.log(k+"20");  // 2020 output
  console.log("hello"-20); //NaN NOT A NUMBER
  
  
 // EXPLICIT TYPE CONVERSION(JO USER KHUD CONVERSION KARE)
  let num1=prompt("Enter the value")  // ye string hai
  console.log(num1,typeof(num1));  // iska type string hai
  
   // CONVERT string TO integer

let num2=parseInt(prompt("Enter the value") ) // ye integer hai
  console.log(num1,typeof(num2));  // iska type Number hai

    // CONVERT IN FLOAT VALUE
    let num3=parseFloat(prompt("Enter the value") ) // ye FLOAT hai
  console.log(num1,typeof(num3));  // iska type number hai
   

  // use NUMBER JO FLOAT AUR INTEGER dono values ke liye use hota
  
  let num4=Number(prompt("Enter the value") ) // ye integer or float value hai
  console.log(num1,typeof(num2));  // iska type Number hai

    