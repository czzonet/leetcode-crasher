export function isPalindrome(x: number): boolean {
  const numsRaw = x.toString().split("");

  let isPalindrom = true;

  const isOdd = numsRaw.length % 2 === 0;

  if (isOdd) {
    for (let index = 0; index < numsRaw.length / 2; index++) {
      if (numsRaw[index] !== numsRaw[numsRaw.length - index - 1]) {
        isPalindrom = false;
        break;
      }
    }
  } else {
    for (let index = 0; index < (numsRaw.length + 1) / 2; index++) {
      if (numsRaw[index] !== numsRaw[numsRaw.length - index - 1]) {
        isPalindrom = false;
        break;
      }
    }
  }

  return isPalindrom;
}
