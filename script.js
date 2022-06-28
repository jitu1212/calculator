let screen=document.getElementById('input');
 buttons=document.querySelectorAll('button');

 let screenvalue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        if(buttonText=='='){
            
            screen.value=eval(screenvalue);
        }
        else if(buttonText=='clearAll'){
            screenvalue='';
            screen.value=screenvalue;
        }
        else{
            screenvalue +=buttonText;
            screen.value=screenvalue;
        }
        
    

    })
}