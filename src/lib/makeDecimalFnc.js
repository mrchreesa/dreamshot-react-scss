export const makeDecimal = (total) => {
  let n = total.toString();
  n = n.split(".");
  if (n[1] === undefined) {
    n[1] = "00";
  }
  if (n[1].length === 1) {
    n[1] = n[1] + "0";
  }
  return n[0] + "." + n[1];
};
