export function rangoli(n) {

  if (typeof n !== "number" || !Number.isInteger(n) || n <= 0) return [];

  let res = [];
  let totalRows = 2 * n - 1;

  for (let i = 1; i <= totalRows; i++) {

    let stars = i <= n ? i : totalRows - i + 1;
    let spaces = n - stars;

    let row = "";

    for (let s = 0; s < spaces; s++) {
      row += " ";
    }

    for (let j = 1; j <= stars; j++) {
      row += "*";
      if (j < stars) row += " ";
    }

    res.push(row);
  }

  return res;
}
