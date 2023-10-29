const data = require('../data');
const { getFilteredBooks } = require("./filters/filter");

const bookController = (query) => {
    let result;
    try {
        Object.keys(query).length > 0 ? result = getFilteredBooks(data, query) : result = data;
    } catch (error) {
        result = {message: error.message}
    }
    return result;
};

module.exports = bookController;

