function diagonalDifference(matrix) {
    let n = matrix.length;
    let sumDiagonal1 = 0;
    let sumDiagonal2 = 0;

    for (let i = 0; i < n; i++) {
        sumDiagonal1 += matrix[i][i];
    }

    for (let i = 0; i < n; i++) {
        sumDiagonal2 += matrix[i][n - i - 1];
    }

    let difference = Math.abs(sumDiagonal1 - sumDiagonal2);

    return difference;
}

const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
const result = diagonalDifference(matrix);
console.log(result);