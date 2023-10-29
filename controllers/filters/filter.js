const getFilteredBooks = (data, querys) => {
    const validquerys = Object.fromEntries(
        Object.entries(querys).filter((kvArr) => {
            if(kvArr[0] === 'filter'){
                return (kvArr[1] === 'year' || kvArr[1] ==='price');
            }
            if(kvArr[0] === 'type'){
                return (kvArr[1] === 'gte' || kvArr[1] === 'lte');
            }
            if(kvArr[0] === 'value'){
                return !isNaN(+kvArr[1]);
            }
        })
    );
    
    if(Object.keys(validquerys).length === 3){
        if(validquerys.filter === 'year'){
            validquerys.filter = 'publicationYear'
        }
        
        const result = data.filter((book) => {
            let bool;
            validquerys.type === 'gte' ? 
            bool = book[validquerys.filter] >= +validquerys.value : 
            bool = book[validquerys.filter] <= +validquerys.value
            return bool;
        });
        return result
    }
    throw new Error('Wrong queries');
};

const getUniqueValues = (array) => {
    return array.filter((el, index) => {
        return array.indexOf(el) === index;
    });
}

module.exports = { getFilteredBooks, getUniqueValues };