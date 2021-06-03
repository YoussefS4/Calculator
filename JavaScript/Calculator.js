var y = 1;
function Print(Input){
    if((Input == '+' || Input == '-' || Input == '/' || Input == '*' || Input == '%') && y == 1){
        y = 0;
        return Input;
    }else{
        if(Input == '+' || Input == '-' || Input == '/' || Input == '*' || Input == '%'){
            return '';
        }else{
            y = 1;
            return Input;
        }
    }
}
function Result(){
    var x = document.fun.input.value;
    if(x){
        return eval(x);
    }
}
function clearAll(){
   return '';
}
function Del(){
    var x = document.fun.input.value;
    y = 1;
    return x.substr(0,x.length-1);
}