export function reverse(x: number): number {
  const val = x > 0 ? x : -x;
  const numsRaw = val.toString().split("");

  numsRaw.reverse();

  const strTarget = numsRaw.join("");

  let target = x > 0 ? parseInt(strTarget) : -parseInt(strTarget);

  let output = 0;
  if (target <= Math.pow(2, 31) - 1 && target >= -Math.pow(2, 31)) {
    output = target;
  }

  return output;
}
