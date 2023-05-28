/**
 * Reordena aleatoriamente um array
 * @param arr array a ser reordenado
 * @returns uma cópia do array, reordenado
 */
export function shuffleArray<T> (arr: T[]): T[] {
  return arr.slice().sort(() => Math.random() - Math.random());
}
