// Trabajando con objetos

const obj = {
    id: 4,
    name: 'Warren',
    lastname: 'Acosta',
    isDevelop: true,
    favorite_books: ['La Sombra del Viento']
}

console.log(obj.favorite_books);

const obj2 = obj;

console.log(obj2);

obj2.name = 'Pedro';

console.log(obj);

const obj3 = {...obj};

// Ordenar listas de objetos en funcion de una propiedad

const ObjectList = [
    {
        id: 3,
        name: 'Warren'
    },
    {
        id: 1,
        name: 'Jhon'
    }
]

console.log(ObjectList);

console.log(ObjectList.sort((a, b) => a.id - b.id));