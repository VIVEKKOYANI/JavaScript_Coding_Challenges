function zickzackArray() {
    let row = 4;
    let col = 4;
    let arr = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ];

    let zigzagArray = [];

    // Print the array in a zig-zag (snake) pattern
    for(let i = 0; i < row; i++) {
        if (i % 2 === 0) {
            // Left to right for even rows
            for(let j = 0; j < col; j++) {
                console.log("left",arr[i][j]);
                zigzagArray.push(arr[i][j]);
            }
        } else {
            // Right to left for odd rows
            for(let j = col - 1; j >= 0; j--) {
                console.log("right",arr[i][j]);
                zigzagArray.push(arr[i][j]);
            }
        }
    }

    console.log("arr in zigzag pattern:", zigzagArray);
}

zickzackArray();
