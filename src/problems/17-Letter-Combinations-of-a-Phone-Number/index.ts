export function letterCombinations(digits: string): string[] {
  const charsRaw = digits.split("");

  const phone = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const strsRes: string[] = [];

  for (let i = 0; i < charsRaw.length; i++) {
    const element = charsRaw[i];
    const charsOfNumber = (phone as any)[element].split("");

    const strsNew: string[] = [];

    if (strsRes.length === 0) {
      strsNew.splice(0, 0, ...charsOfNumber);
    } else {
      for (let j = 0; j < strsRes.length; j++) {
        const strRes = strsRes[j];
        for (let k = 0; k < charsOfNumber.length; k++) {
          strsNew.push(strRes + charsOfNumber[k]);
        }
      }
    }
    strsRes.splice(0, strsRes.length, ...strsNew);
  }

  return strsRes;
}
