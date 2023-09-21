// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || !matrix.length) {
        return [];
    } else if (matrix.length === 1) {
        return matrix;
    }

    let result = [];
    let reverse = false;

    matrix.forEach((subarray) => {
        if (!subarray || !subarray.length) {
            result.push(subarray);
        } else {
            reverse && subarray.reverse();

            result = [...result, ...subarray];

            reverse = !reverse;
        }
    });

    return result;
};
