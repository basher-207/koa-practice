const data = require('../data');
const { getUniqueValues } = require("./filters/filter");

const authorController = () => {
    const allAuthors = data.map(book => book.author);
    return getUniqueValues(allAuthors);
};

module.exports = authorController;