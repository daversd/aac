export function cleanString(str: string): string {
  let cleaned = str.toLowerCase();
  cleaned = cleaned.replace(new RegExp("[àáâãäå]", 'g'), "a");
  cleaned = cleaned.replace(new RegExp("ç", 'g'), "c");
  cleaned = cleaned.replace(new RegExp("[èéêë]", 'g'), "e");
  cleaned = cleaned.replace(new RegExp("[ìíîï]", 'g'), "i");
  cleaned = cleaned.replace(new RegExp("ñ", 'g'), "n");
  cleaned = cleaned.replace(new RegExp("[òóôõö]", 'g'), "o");
  cleaned = cleaned.replace(new RegExp("[ùúûü]", 'g'), "u");

  return cleaned;
}