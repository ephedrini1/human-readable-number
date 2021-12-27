module.exports = function toReadable (number) {
   let a = Math.floor(number / 100);
   let a100 = a * 100;
   let b = Math.floor((number - a100) / 10);
   let b10 = b * 10;
   let c = number - (a100 + b10);
   
   let onesArr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
   let teensArr = ['','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   let tensArr = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   
   if(number === 0) {
       return 'zero';
   }

    let hundreds = onesArr[a] + ' hundred';;
    let teens = teensArr[number - 10];
    let tens = tensArr[b - 1];
    let ones = onesArr[c];
    
    if(number < 100) {
        if (number < 10) {
           return ones; 
        }

        else if(number % 10 === 0) {
            return tens;
        }

        else if (number > 10 && number < 20) {
            return teens;
        }
        
        else return tens + ' ' + ones;
    }

    if (number >= 100 ) {
        if (number % 100 === 0) {
        return hundreds;
       }

       if(number % 10 === 0) {
           return hundreds + ' ' + tens;
       }

       if ((number - a100) > 10 && (number - a100) < 20) {
        teens = teensArr[(number - a100) - 10];
        return hundreds + ' ' + teens;
       }
       
       if(number % 100 < 10) {
           return hundreds + ' ' + ones;
       }
        else return hundreds + ' ' + tens + ' ' + ones;
    } 
}

