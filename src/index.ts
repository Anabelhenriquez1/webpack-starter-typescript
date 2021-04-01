

import  db from './Firebase/Config';

const usuario = {
    nombre: 'fernando',
    activo: true,
    fechaNaci: 0
}

// insert into usuarios ....

db.collection('usuarios')
    .add( usuario )
    .then(docRef => {
        console.log(docRef)
    }
index.ts
git commit -m "tercer vide",