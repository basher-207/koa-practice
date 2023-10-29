const data = require('../data');
const { getUniqueValues } = require("./filters/filter");

const genreController = () => {
    const allGenres = data.map(book => book.genre);
    return getUniqueValues(allGenres);
};

module.exports = genreController;