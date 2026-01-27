var minDeletionSize = function (strs) {
  let count = 0;
  const rows = strs.length;
  const cols = strs[0].length;

  for (let col = 0; col < cols; col++) {
    for (let row = 1; row < rows; row++) {
      if (strs[row][col] < strs[row - 1][col]) {
        count++;
        break;
      }
    }
  }

  return count;
};