/**
 * Cria uma padrão de busca (definido como um `string[]`) a partir de uma `string`
 * @param str a string original
 * @returns array de strings resultante
 */
export function stringToPatterns (str: string): string[] | undefined {
  str.replace(',', '');
  const pattern = str.split(' ').filter(p => p !== '');
  return pattern.length === 0 ? undefined : pattern;
}
