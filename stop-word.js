process.stdin.resume();
process.stdin.on('data', (data) => {
    const stopWord = String(data).trim();

    if (stopWord === 'Флюгегехаймен') {
        console.log('Завершаю процесс');
        process.exit(0);
    }

    console.log('Это не стоп-слово!');
})
