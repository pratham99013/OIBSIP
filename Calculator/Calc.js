let s="";
buttons=document.querySelectorAll(".btn");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{

        if(e.target.innerHTML=="="){
            try{
              s=eval(s);
               document.querySelector('input').value=s;
            }
            catch(e)
        {
            s="Invalid Statement"
            document.querySelector('input').value=s;
        }        
    }
        else if(e.target.innerHTML=="AC"){
            s="";
            document.querySelector('input').value=s;
        }
        else{
        s=s+e.target.innerHTML;
        document.querySelector('input').value=s;
        }
    })
   
    })

    