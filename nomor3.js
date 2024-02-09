function countQueryOccurrences(input, query) {
    return query.map(word => input.filter(item => item === word).length);
}

const INPUT = ['ac', 'dz', 'bbb', 'dz', 'ac'];
const QUERY = ['bbb', 'ac', 'dz'];
const output = countQueryOccurrences(INPUT, QUERY);
console.log(output);
