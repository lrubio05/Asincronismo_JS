const somethingWilHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!');
        } else {
            reject('Upss!');
        }
    });
};

somethingWilHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

    const somethingWilHappen2 = () => {
        return new Promise ((resolve, reject) => {
            if(true){
                setTimeout(() => {
                    resolve('True');
                }, 2000);
            } else {
                const error = new Error('Upss!');
                reject(error);
            }
        });
    }

somethingWilHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));
//Arreglo para ingresar las dos array functions en un solo array
Promise.all([somethingWilHappen(),somethingWilHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    });