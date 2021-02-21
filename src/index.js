
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let newMatrix = [];
  if (Array.isArray(matrix) === false) {
    return newMatrix;
  }
  for (let i = 0; i < matrix.length; i++) {

    if (i % 2 == 0) {
      newMatrix = newMatrix.concat(matrix[i]);
    } else {
      newMatrix = newMatrix.concat(matrix[i].reverse());
    }
  }
  return newMatrix;
}
