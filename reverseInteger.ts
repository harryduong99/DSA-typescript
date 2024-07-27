const minInt = -Math.pow(2, 31);
const maxInt = -minInt - 1;

function reverse(x: number): number {
  const isNegative = x < 0;
  let reversed = 0;
  if (isNegative) {
    x = -x;
  }

  // this is the way to reserve a number without converting it to string
  while (x > 0) {
    const remainder = x % 10;
    reversed = reversed * 10 + remainder;
    x = Math.floor(x / 10);
  }

  if (reversed > maxInt) {
    return 0;
  }
  return isNegative ? -reversed : reversed;
}
