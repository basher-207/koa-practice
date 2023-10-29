const getFilteredBooks = (data, query) => {
    const validQuery = {
        filter: ['year', 'price'],
        type: ['gte', 'lte']
    };
    const hasValidQueries = () => {
        return Object.keys(validQuery).every((key) => {
            return validQuery[key].includes(query[key]);
        });
    };
    const operators = {
        gte: a => a >= query.value,
        lte: a => a <= query.value
    };

    if( isNaN(query.value) || !hasValidQueries() ){
        throw new Error('Wrong queries');
    };

    const filterFn = (item) => {
        return query.filter === 'year' ?  
        operators[query.type](item.publicationYear) : 
        operators[query.type](item.price)
    }
    return data.filter(filterFn);
};

const getUniqueValues = (array) => {
    return array.filter((el, index) => {
        return array.indexOf(el) === index;
    });
};

module.exports = { getFilteredBooks, getUniqueValues };