let number =prompt('Enter a number');
function check(evenodd,funcheck){
    if(funcheck(evenodd)){
        return true ;
    }else{
        return false ;
    }
}

//function even (value1){ return value1 %2 === 0 ;}

//function odd(value2) {return value2 %2 !== 0 ; }


//let even_number = check(number,even);
//alert (even_number); // normal

// alert(check(number,odd)); //shorthand 


 // let evennext =function (i){  return i % 2 === 0} ;

// alert(check(number,evennext)); // normal

// alert(check(number,function(a){return a % 2 !== 0})) ; // shorthand



