var result = 0;
var firstTimeOperation = true;
var dotClickedOnce = false;
var operation = '';
var enteringFirstChar = true;
document.querySelector("input").value = "0";

var element = document.querySelectorAll(".btn");
for(let i=0; i<element.length; i++){
    
    element[i].addEventListener("click", btnEvent);
}


function btnEvent(){
    
    var txt = this.innerText;
    
    switch(txt){
            
        case "1" : if(enteringFirstChar){
    
                        document.querySelector("input").value = "";
                        document.querySelector("input").value = "1";
                        enteringFirstChar = false;
                    }else{
    
                        document.querySelector("input").value += "1";
                    }
                    break;
        case "2" : if(enteringFirstChar){
    
                        document.querySelector("input").value = "";
                        document.querySelector("input").value = "2";
                        enteringFirstChar = false;
                    }else{
    
                        document.querySelector("input").value += "2";
                    }
                    break;
        case "3" :if(enteringFirstChar){
    
                        document.querySelector("input").value = "";
                        document.querySelector("input").value = "3";
                        enteringFirstChar = false;
                    }else{
    
                        document.querySelector("input").value += "3";
                    }
                    break;
        case "4" : if(enteringFirstChar){
    
                        document.querySelector("input").value = "";
                        document.querySelector("input").value = "4";
                        enteringFirstChar = false;
                    }else{
    
                        document.querySelector("input").value += "4";
                    }
                    break;
        case "5" : if(enteringFirstChar){
    
                        document.querySelector("input").value = "";
                        document.querySelector("input").value = "5";
                        enteringFirstChar = false;
                    }else{
    
                        document.querySelector("input").value += "5";
                    }
                    break;    
        case "6" : if(enteringFirstChar){
    
                        document.querySelector("input").value = "";
                        document.querySelector("input").value = "6";
                        enteringFirstChar = false;
                    }else{
    
                        document.querySelector("input").value += "6";
                    }
                    break;
        case "7" : if(enteringFirstChar){
    
                        document.querySelector("input").value = "";
                        document.querySelector("input").value = "7";
                        enteringFirstChar = false;
                    }else{
    
                        document.querySelector("input").value += "7";
                    }
                    break;
        case "8" : if(enteringFirstChar){
    
                        document.querySelector("input").value = "";
                        document.querySelector("input").value = "8";
                        enteringFirstChar = false;
                    }else{
    
                        document.querySelector("input").value += "8";
                    }
                    break;
        case "9" :if(enteringFirstChar){
    
                        document.querySelector("input").value = "";
                        document.querySelector("input").value = "9";
                        enteringFirstChar = false;
                    }else{
    
                        document.querySelector("input").value += "9";
                    }
                    break;
        case "0" : if(enteringFirstChar){
    
                        document.querySelector("input").value = "";
                        document.querySelector("input").value = "0";
                        enteringFirstChar = false;
                    }else{
    
                        document.querySelector("input").value += "0";
                    }
                    break;
        case "." :  if(!dotClickedOnce){
                        
                        if(enteringFirstChar){
    
                            document.querySelector("input").value = "";
                            document.querySelector("input").value = ".";
                            enteringFirstChar = false;
                        }else{
                        
                            document.querySelector("input").value += ".";
                        }
                        
                        dotClickedOnce = true;
                    }
                    
                    
                    break;
        case "+" :  if(firstTimeOperation){
            
                        result= Number(document.querySelector("input").value);
                        document.querySelector("input").value = "0";
                        firstTimeOperation = false;
                    }else{  
                        
                        result+= Number(document.querySelector("input").value);
                        document.querySelector("input").value = "0";
                    }
                    operation = '+';
                    dotClickedOnce = false;
                    enteringFirstChar = true;
                    break;
        case "-" : if(firstTimeOperation){
            
                        result = Number(document.querySelector("input").value);
                        document.querySelector("input").value = "0";
                        firstTimeOperation = false;
                    }else{  
                        
                        result-= Number(document.querySelector("input").value);
                        document.querySelector("input").value = "0";
                    }
                    operation = '-';
                    dotClickedOnce = false;
                    enteringFirstChar = true;
                    break;
        case "*" : if(firstTimeOperation){
            
                        result = Number(document.querySelector("input").value);
                        document.querySelector("input").value = "0";
                        firstTimeOperation = false;
                    }else{  
                        
                        result*= Number(document.querySelector("input").value);
                        document.querySelector("input").value = "0";
                    }
                    operation = '*';
                    dotClickedOnce = false;
                    enteringFirstChar = true;
                    break;
        case "/" : if(firstTimeOperation){
            
                        result = Number(document.querySelector("input").value);
                        document.querySelector("input").value = "0";
                        firstTimeOperation = false;
                    }else{  
                        
                        result/= Number(document.querySelector("input").value);
                        document.querySelector("input").value = "0";
                    }
                    operation = '/';
                    dotClickedOnce = false;
                    enteringFirstChar = true;
                    break;
        case "AC" : document.querySelector("input").value = "0";
                    dotClickedOnce = false;
                    firstTimeOperation = true;
                    result = 0;
                    operation = '';
                    enteringFirstChar = true;
                    break;
        case "=" :  if(operation === '+'){
                        
                        result+= Number(document.querySelector("input").value); 
                        document.querySelector("input").value= String(result);
                    }
                    else if(operation === '-'){
                        
                        result-= Number(document.querySelector("input").value); 
                        document.querySelector("input").value= String(result);
                    }
                    else if(operation === '*'){
                        
                        result*= Number(document.querySelector("input").value); 
                        document.querySelector("input").value= String(result);
                    }
                    else if(operation === '/'){
                        
                        result/= Number(document.querySelector("input").value); 
                        document.querySelector("input").value= String(result);
                    }
                    
                    firstTimeOperation = true;
                    
                    
                    break;
            
    }
    
}