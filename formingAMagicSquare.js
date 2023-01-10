


We define a magic square to be an n x n  matrix of distinct positive integers from 1 to n SQUARED  where the sum of any row, column, 
or diagonal of length  is always equal to the same number: the magic constant.

You will be given a 3 x 3  matrix s of integers in the inclusive range [1,9] .
We can convert any digit a to any other digit b in the range[1,9] at cost of[a-b] .
Given s, convert it into a magic square at minimal cost. Print this cost on a new line.

Note: The resulting magic square must contain distinct integers in the inclusive range .


function formingMagicSquare(s) {
    // All possible magic squares
    const magicSquares = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
    ];

    // Find the minimal cost of converting `s` into a magic square
    let minCost = Infinity;
    for (const magicSquare of magicSquares) {
        let cost = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                cost += Math.abs(s[i][j] - magicSquare[i][j]);
            }
        }
        minCost = Math.min(minCost, cost);
    }

    return minCost;
}



