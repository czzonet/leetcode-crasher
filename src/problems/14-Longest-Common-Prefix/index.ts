export function longestCommonPrefix(strs: string[]): string {
  /** Return '' if strs is an empty array, because of no strMin */
  if (strs.length === 0) {
    return "";
  }

  // Find min length str of strs
  let shortStr = {
    length: 0,
    index: 0,
  };
  /** Loop to find min length and index */
  strs.forEach((d, i) => {
    d.length < shortStr.length
      ? ([shortStr.length, shortStr.index] = [d.length, i])
      : null;
  });
  /** Here is min length str */
  const strMin = strs[shortStr.index];

  /** Split to chars */
  const charsStrMin = strMin.split("");

  /** Init max common index */
  let indexCursor = 0;
  /** Init common check flag */
  let isCommon = true;

  for (; indexCursor < charsStrMin.length; indexCursor++) {
    const charCommon = charsStrMin[indexCursor];
    /** Check other strs */
    for (let j = 0; j < strs.length; j++) {
      const str = strs[j];

      /** Break if char of the same index is not same */
      if (charCommon !== str[indexCursor]) {
        isCommon = false;
        break;
      }
    }

    /** Break if check failed */
    if (isCommon === false) {
      break;
    }
  }

  /** Keep another one more index if common flag is true */
  const strMaxCommon = strMin.slice(
    0,
    isCommon ? indexCursor + 1 : indexCursor
  );

  return strMaxCommon;
}
