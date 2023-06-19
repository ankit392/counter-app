   //
   let ele=document.getElementById("help")
   
   let saveel=document.getElementById("saveEl")
   
   console.log(ele)
   
   console.log(saveel)
   
   let c=0;
   function increament()
   {
       //console.log("button is clicked")
       c=c+1;
        
       ele.textContent=c// manupilate
       console.log(ele)
   }
   
   
   
   function save()
   {
       // count and dash previous entries 
       let x=c+"->"
       // not to delete previos
       saveel.innerText += x
       console.log(c)
       ele.textContent=0
       c=0
       
   }
  // ............................................................
//   let welcomeel=document.getElementById("welcome");
//   let name="ankit"
//   let greeting="good mrng ";
  
//   welcomeel.innerText=greeting+name;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   
   