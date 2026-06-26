export function calculate(a: number, b: number, c: number, d: number) {
  if (a > 0) {
    if (b > 0) {
      if (c > 0) {
        if (d > 0) {
          return true;
        }
      }
    }
  }

  return false;
}
