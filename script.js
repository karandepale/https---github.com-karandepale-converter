
function convert(){

//DECLARATION OF REFERENCE VARIABLE'S :-
var inputType   = document.getElementById('inputtype').value;
var inputNumber = document.getElementById('inputnumber').value;
var outputType  = document.getElementById('outputtype').value;
var outputNumber ;

//CONVERSION  FROM  BINARY TO  OTHER :-

if(inputType == 'inputbinary' &&  outputType == 'outputbinary') outputNumber = "INVALID" ;
if(inputType == 'inputbinary' &&  outputType == 'outputoctal' ) outputNumber = bin2oct(inputNumber);
if(inputType == 'inputbinary' &&  outputType == 'outputdecimal' ) outputNumber = bin2dec(inputNumber);
if(inputType == 'inputbinary' &&  outputType == 'outputhex' ) outputNumber = bin2hex(inputNumber);



//CONVERSION  FROM  DECIMAL  TO  OTHER  :-

if( inputType == 'inputdecimal'  && outputType == 'outputdecimal' ) outputNumber = "INVALID" ;
if( inputType == 'inputdecimal'  && outputType == 'outputbinary' ) outputNumber = dec2bin(inputNumber);
if( inputType == 'inputdecimal'  && outputType == 'outputoctal' ) outputNumber = dec2oct(inputNumber);
if( inputType == 'inputdecimal'  && outputType == 'outputhex' ) outputNumber = dec2hex(inputNumber);




//CONVERSION   FROM   OCTAL  TO  OTHER :-

if( inputType == 'inputoctal'  &&   outputType == 'outputoctal' ) outputNumber = "INVALID" ;
if( inputType == 'inputoctal'  &&   outputType == 'outputbinary' ) outputNumber = oct2bin(inputNumber);
if( inputType == 'inputoctal'  &&   outputType == 'outputdecimal' ) outputNumber = oct2dec(inputNumber);
if( inputType == 'inputoctal'  &&   outputType == 'outputhex' ) outputNumber = oct2hex(inputNumber);




//CONVERSION  FROM  HEXADECIMAL   TO ANOTHER :-

if(inputType == 'inputhex'  &&  outputType == 'outputhex' ) outputNumber = "INVALID" ;
if(inputType == 'inputhex'  &&  outputType == 'outputdecimal' ) outputNumber = hex2dec(inputNumber);
if(inputType == 'inputhex'  &&  outputType == 'outputoctal' ) outputNumber = hex2oct(inputNumber);
if(inputType == 'inputhex'  &&  outputType == 'outputbinary' ) outputNumber = hex2bin(inputNumber);



document.getElementById('outputnumber').value = outputNumber ;

}



//DEFINITION OF FUNCTION'S  :-

//binary  to  decimal
function bin2dec(inputNumber){
    return parseInt(inputNumber , 2);
}


//binary  to octal
function bin2oct(inputNumber){
    return parseInt(inputNumber , 2).toString(8); 
}


//binary  to  hexadecimal
function bin2hex(inputNumber){
    return parseInt(inputNumber , 2).toString(16);
}


//decimal  to  binary
function dec2bin(inputNumber){
    return parseInt(inputNumber).toString(2);
}



//decimal  to  octal
function dec2oct(inputNumber){
    return parseInt(inputNumber).toString(8);
}



//decimal  to  hexadecimal
function dec2hex(inputNumber){
    return parseInt(inputNumber).toString(16);
}


//octal  to  binary 
function oct2bin(inputNumber){
    return parseInt(inputNumber , 8).toString(2);
}



//octal  to  decimal
function oct2dec(inputNumber){
    return parseInt(inputNumber , 8).toString(10);
}


//octal  to   hexa-decimal
function  oct2hex(inputNumber){
    return parseInt(inputNumber , 8).toString(16);
}



//hexadecimal  to  binary 
function hex2bin(inputNumber){
    return parseInt(inputNumber , 16).toString(2);
}




// hexadecimal  to  octal
function hex2oct(inputNumber){
    return parseInt(inputNumber , 16).toString(8);
} 



// hexadecimal  to  decimal
function hex2dec(inputNumber){
    return parseInt(inputNumber , 16).toString(10);
}



















