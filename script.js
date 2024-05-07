function intToRoman(n) {
    let r = 0;
    let number;
    let value;
    function separateUnits(num) {
        number = num.toString().split('');
        var multiplier = 1;

        for (var i = number.length - 1; i >= 0; i--) {
            number[i] *= multiplier;
            multiplier *= 10;
        }
        console.log(number);

        let p = 0;
        while (p < number.length) {
            console.log(number[p]);
            switch (number[p]) {
                case 3000:
                    value = 'MMM'
                    break;
                case 2000:
                    value = 'MM'
                    break;
                case 1000:
                    value = 'M'
                    break;
                case 500:
                    value = 'D'
                    break;
                case 100:
                    value = 'C'
                    break;
                case 50:
                    value = 'L'
                    break;
                case 10:
                    value = 'X'
                    break;
                case 5:
                    value = 'V'
                    break;
                case 1:
                    value = 'I'
                    break;
                case number[p] < 100:
                    while (number[p] % 10 ==)  {
                        
                    }
                default:
                    break;
                 if
            }
            console.log(value);
            p++;
        }
    }
    separateUnits(2134);
}
intToRoman();