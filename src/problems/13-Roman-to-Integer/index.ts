export function romanToInt(s: string): number {
  const charValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const specificValue = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  const specs = Object.keys(specificValue);

  let count = 0;

  let sTmp = s;

  for (let i = 0; i < specs.length; i++) {
    const element = specs[i];

    /** Remove all specific value and add the value */

    while (sTmp.includes(element)) {
      /** Remove */
      sTmp = sTmp.replace(element, "");
      /** Value with the char */
      const t = (specificValue as any)[element];
      /** Add */
      count += t;
    }
  }

  sTmp.split("").forEach((d) => (count += (charValue as any)[d]));

  return count;
}
