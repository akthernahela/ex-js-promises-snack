//Snack 1
//Ottieni il titolo di un post con una Promise.

/*
Crea una funzione getPostTitle(id) che accetta un id
e restituisce una Promise che recupera il titolo
di un post dal link https://dummyjson.com/posts/{id}
*/
/*
const getPostTitle = id => {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(obj => resolve(obj))
            .catch(reject);
    })
    return promessa;
}

getPostTitle(1)
    .then(obj => console.log(obj))
    .catch(error => console.error(error))
*/
//Snack 2

/*
Crea la funzione lanciaDado() che restituisce una Promise che, 
dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, 
nel 20 % dei casi, il dado si "incastra" e la Promise va in reject.
*/

function lanciaDado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject('Il dado si è incastrato!')
            } else {
                const numero = Math.floor(Math.random() * 6) + 1;
                resolve(numero);
            }
        }, 3000);
    });
}

lanciaDado()
    .then(numero => { console.log(numero); })
    .catch(errore => { console.log(errore); })