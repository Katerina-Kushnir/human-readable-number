module.exports = function toReadable (number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function convertToWords(num) {
        if (num === 0) {
            return '';
        } else if (num <= 10) {
            return units[num];
        }
        else if (num < 20) {
            return teens[num - 10];
        }
        else {
            return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? ' ' + units[num % 10] : '');
        }
    }
    
    if (number === 0) {
        return 'zero';
    }
    
    let result = '';
    
    if (number >= 100) {
        result += units[Math.floor(number / 100)] + ' hundred';
        number %= 100;
        if (number !== 0) {
            result += ' ';
        }
    }
    
    result += convertToWords(number);
    
    return result;
}
