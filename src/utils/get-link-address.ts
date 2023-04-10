import { Entry } from '../core/entry';
import { cleanString } from './clean-string';

export function getLinkAddress (entry: Entry): string {
  let address = entry.year.toString() + '-' + entry.name;
  address = cleanString(address);
  address = address.replace(/[[\]:(),_]/g, '');
  address = address.trim();
  address = address.replace(/\s/g, '-');
  if (address.length > 50) address = address.slice(0, 50);
  return address;
}
