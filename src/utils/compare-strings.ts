export function compareStrings(str1: string, str2: string, tolerance?: number): boolean {
  const matrix = Array(str1.length + 1).fill(null).map(() => Array(str2.length + 1).fill(null));

  for (let i = 0; i <= str2.length; i += 1) {
    matrix[0][i] = i;
  }

  for (let j = 0; j <= str1.length; j += 1) {
    matrix[j][0] = j;
  }

  for (let j = 1; j <= str2.length; j += 1) {
    for (let i = 1; i <= str1.length; i += 1) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j] + 1, // deletion
        );
      }
    }
  }

  const distance = matrix[str1.length][str2.length];

  tolerance = tolerance ?? Math.ceil(str1.length * .1);

  return distance <= tolerance;
}

export function fuzzyStringMatch (text: string, pattern: string, tolerance?: number): boolean {
  // compare pattern against substrings
  const substrings = text.replaceAll(/([.,;])/g, '').split(' ');
  return substrings.some(s => compareStrings(s, pattern, tolerance));
}