import { Material } from '../core/material';
import { cleanString } from './clean-string';

/**
 * Produz um endereço utilizando o conteúdo do material
 * @param material material a ser processado
 * @returns endereço do link
 */
export function getLinkAddress (material: Material): string {
  let address = material.year.toString() + '-' + material.name;
  address = cleanString(address);
  address = address.replace(/[[\]:(),_]/g, '');
  address = address.trim();
  address = address.replace(/\s/g, '-');
  if (address.length > 50) address = address.slice(0, 50);
  return address;
}
