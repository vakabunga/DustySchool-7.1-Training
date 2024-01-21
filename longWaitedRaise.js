process.stdin.resume();
console.log('Введите числа через пробел для их суммирования');

process.stdin.on('data', (data) => {
    const numberArray = String(data).trim().split(' ').map(Number);
    let sum = 0;

    for (let i = 0; i < numberArray.length; i++) {
        if (!isNaN(numberArray[i])) {
            sum += numberArray[i];
        }
    }

    console.log('Сумма чисел равна ' + sum);
})
