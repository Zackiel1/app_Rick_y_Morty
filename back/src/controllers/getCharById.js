const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
    const { id } = req.params;

    fetch(URL + id)
        .then(response => response.json())
        .then(data => {
            let character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                image: data.image
            }
            res.status(200).json(character);
        })
        .catch(error => res.status(500).json(error.message))
        
}

module.exports = getCharById;




// const getCharById = (res, id) => {

//     fetch(`https://rickandmortyapi.com/api/character/${id}`)
//         .then((response) => response.json())
//         .then(data => {
//             let character = {
//                 id: data.id,
//                 name: data.name,
//                 gender: data.gender,
//                 species: data.species,
//                 image: data.image
//             }
//             res.writeHead(200, { "Content-type": "application/json" })
//             res.end(JSON.stringify(character))
//         })
//         .catch(err => res.writeHead(500, { "Content-type": "text/plain" })
//                          .end(`el personaje con id:${id} no fue encontrado.`)
//         )
        
// };

// module.exports = getCharById;
