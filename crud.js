const request = require ('request');
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/';

//READ 
// const getAllAuthors = () => {
//     const URI = 'authors/';
//     return new Promise((resolve, reject)=>{
//         request.get(`${URL_BASE}${URI}`,(err, response, body) =>{
//             const json = JSON.parse(body);
//             response.statusCode === 200
//             ? resolve (json)
//             : reject (err)
//         })
//     })
// }


// const getAuthorById = (id) => {
//     const URI = 'authors/';
//     return new Promise((resolve, reject)=> {
//         request.get(`${URL_BASE}${URI}${id}`,(err, response, body) =>{
//             const json = JSON.parse(body);
//             response.statusCode === 200
//             ? resolve (json)
//             : reject (err)
//         })
//     })
// }
    


// EJECUCIONES       
// getAllAuthors()
//  .then( respuesta => console.log (respuesta))
//  .catch(err => console.log(err))

// getAuthorById('1692')
//  .then( respuesta => console.log (respuesta))
//  .catch(err => console.log(err))

//  const createAuthor = (nombre, apellidos, bio, genero, edad) =>{
//      const URI = 'authors/';
//      const autorEnviar = {
//          name: nombre,
//          last_name: apellidos,
//          nacionalidad: 'MX',
//          biography: bio,
//          gender: genero,
//          age: edad
//      }
//      const URL = `${URL_BASE}${URI}`
//      return new Promise ((resolve, reject) =>{
//          request.post(
//              {
//              url: URL ,
//              form: autorEnviar 
//             },
//             (err, response, body) => {
//                 const json = JSON.parse(body);
//                 console.log(response.statusCode);
//                 response.statusCode ===201
//                 ? resolve(json)
//                 : reject (err)
//             })
//      });

//  }

// //ejecucion 
//  createAuthor (
//      'DCTH',
//      'Torres',
//      'Soy otro autor',
//      'F',
//       28

//  ) .then (respuesta => console.log (respuesta)).catch(err => console.log(err))


//UPDATE

/* const updateAuthor = (nombre,apellidos,bio,genero,edad, id) => {
    const URI = 'authors/';
    const autorNuevo = {
        name: nombre,
        last_name: apellidos,
        nacionalidad: 'MX',
        biography: bio,
        gender: genero,
        age: edad
    }
    const URL = `${URL_BASE}${URI}${id}/`;
    return new Promise ((resolve,reject) => {
        request.put({url: URL, form: autorNuevo},
            (err, response, body) => {
                const json = JSON.parse(body);
                response.statusCode === 200
                ? resolve (json)
                : reject (err)

            });
    
        });

}

//EJECUCION
updateAuthor(
    'Dan',
     'Torres',
     'SOY OTRX',
     'F',
      25,
      1692
)
    
.then (respuesta => console.log(respuesta)).catch(err => console.log (err)) */

//DELETE 

const deleteAuthor = (id) => {
    const URI = 'authors/';
    return new Promise((resolve, reject)=> {
        request.delete(`${URL_BASE}${URI}${id}/ `,(err, response, body) =>{
                        response.statusCode === 204
                        ? resolve (response.statusCode)
                        : reject (err)
             })
        })
 }
//EJECUCION
deleteAuthor(1994)
 .then( respuesta => console.log (respuesta))
 .catch(err => console.log(err))
 

    
    