const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = (req, res) => {
    const { id } = req.params;

    fetch(URL + id) 
        .then(response => response.json())
        .then(data => {
            let character = {
                image: data.image,
                name: data.name,
                gender: data.gender,
                status: data.status,
                origin: data.origin.name,
                species: data.species
            }
            res.status(200).json(character);
        })
        .catch(error => res.status(500).json(error.message))
        
}

module.exports = getCharDetail;


// const getCharDetail = (res, id) => {
//     fetch(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(response => response.json())
//         .then(data => {
//             let character = {
//                 image: data.image,
//                 name: data.name,
//                 gender: data.gender,
//                 status: data.status,
//                 origin: data.origin.name,
//                 species: data.species
//             }
//             res.writeHead(200, { "Content-type": "application/json" })
//             res.end(JSON.stringify(character))
//         })
//         .catch(err => res.writeHead(500, { "Content-type": "text/plain" })
//                          .end("No fueron encontrados los detalles de este personaje")  
//         )
// }

// module.exports = getCharDetail;