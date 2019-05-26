const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        /*
        resolve({
            name: 'Iohan',
            age : 25
        });
        */
        reject('Algo deu errado');
    }, 1500);
});

console.log('antes');

promise.then((data) => {
    console.log('1',data);
})
.catch((err) => {
    console.log('Erro obtido:',err);
});

promise.then((data) => {
    console.log('1',data);
},(err) => {
    console.log('Erro obtido:',err);
})

console.log('depois');