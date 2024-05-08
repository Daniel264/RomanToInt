function intToRoman(n) {
    let number;
    let value = '';
    let currentValue;
    let prevValue = '';
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
            if (number[p] >= 1000) {
                value = 'M'.repeat(Math.floor(number[p] / 1000));
            }
            else if (number[p] === 900) {
                value = 'CM';
            }
            else if (number[p] > 500) {
                value = 'D' + 'C'.repeat(Math.floor(number[p] / 100) - 5)
            }
            else if (number[p] === 500) {
                value = 'D';
            }
            else if (number[p] === 400) {
                value = 'CD';
            }
            else if (number[p] >= 100) {
                value = 'C'.repeat(Math.floor(number[p] / 100));
            }
            else if (number[p] === 90) {
                value = 'XC';
            }
            else if (number[p] >= 60) {
                value = 'L' + 'X'.repeat(Math.floor(number[p] / 10) - 5);
            }
            else if (number[p] === 50) {
                value = 'L';
            }
            else if (number[p] === 40) {
                value = 'XL';
            }
            else if (number[p] >= 10) {
                value = 'X'.repeat(Math.floor(number[p] / 10));
            }
            else if (number[p] === 5) {
                value = 'V';
            }
            else if (number[p] === 9) {
                value = 'IX';
            }
            else if (number[p] >= 6) {
                value = 'V' + 'I'.repeat(number[p] - 5)
            }
            else if (number[p] === 4) {
                value = 'IV';
            }
            else if (number[p] >= 1) {
                value = 'I'.repeat(number[p]);
            }
            else {
                value = '';
            }
            console.log(value);
            currentValue = value;
            prevValue += currentValue;
            p++;
        }
        console.log(prevValue);
    }
    separateUnits(10);
}
intToRoman();