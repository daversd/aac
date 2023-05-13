/**
 * Verifica se duas strings são compatíveis / equivalentes através da medição da métrica
 * de distância Levenshtein, levando em consideração a tolerância de erro - a
 * quantidade de erros / diferenças. Se a tolerância não é especificada, seu valor é
 * determinado como 15% da quantidade de caracteres da string de referência.
 * @param str1 a string em que a busca será realizada
 * @param str2 a string que está sendo buscada
 * @param tolerance a tolerância de erro
 * @returns se as strings são compatíveis ou não
 */
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

  tolerance = tolerance ?? Math.ceil(str1.length * .15);

  return distance <= tolerance;
}

/**
 * Utiliza o método de comparação de strings para determinar se são compatíveis ou não.
 * Ver {@link compareStrings}.
 * @param text string de referência
 * @param pattern padrão de string a ser buscado
 * @param tolerance tolerância de erros
 * @returns se há compatibilidade entre as strings ou não.
 */
export function fuzzyStringMatch (text: string, pattern: string, tolerance?: number): boolean {
  // compare pattern against substrings
  const substrings = text.replaceAll(/([.,;])/g, '').split(' ');
  return substrings.some(s => compareStrings(s, pattern, tolerance));
}