// let { favs } = require('../utils/favs.js');

let favs = [];

const postFavs = (req, res) => {
    favs.push(req.body)
    res.status(200).json(favs)
}

const getFavs = (req, res) => {
    res.status(200).json(favs);
}

const deleteFavs = (req, res) => {
    const { id } = req.params;
    favs = favs.filter(fav => fav.id !== Number(id));
    return res.status(200).json(favs);
}

module.exports = { postFavs, getFavs, deleteFavs };