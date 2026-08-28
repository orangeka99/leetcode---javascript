Array.prototype.snail = function (rowsCount, colsCount) {
  let array_2d = Array.from({ length: rowsCount }, () =>
    Array(colsCount).fill(null),
  );

  if (rowsCount * colsCount != this.length) {
    return [];
  } else if (rowsCount == 1) {
    array_2d[0] = [...this];

    // console.log(row_1);

    return array_2d;
  }

  let first_move = rowsCount * 2 - 1;

  let multi_f = 0;

  let plus_s = 0;

  let secd_move = 1;

  let main_move = 0;

  for (let i = 0; i < rowsCount; i++) {
    multi_f = first_move;

    plus_s = secd_move;

    main_move = first_move;

    array_2d[i][0] = this[i];

    if (i != 0) {
      main_move += i;
    }

    for (let x = 0; x < colsCount; x++) {
      if (x != 0) {
        if (x % 2 == 0) {
          // even numbers
          array_2d[i][x] = this[main_move];
          main_move += multi_f;
        } else {
          array_2d[i][x] = this[main_move]; // 1
          main_move += plus_s;
        }
      }
    }

    first_move -= 2;

    secd_move += 2;
  }

  return array_2d;

};
