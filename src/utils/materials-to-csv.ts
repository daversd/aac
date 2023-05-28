import { Material } from '../core/material';

/**
 * Converte um array de materiais em um string csv
 * @param materials
 * @returns
 */
export function materialsToCSV (materials: Material[]): string {
  const headers = Object.keys(materials[0]).join('|') + '\n';
  const rows = materials.map((material) => Object.values(material).map(v => v || '').join('|') + '\n');
  return headers + rows.join('');
}
