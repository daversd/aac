export function cleanString (str: string): string {
  let cleaned = str.toLowerCase();
  cleaned = cleaned.replace(/[àáâãäå]/g, 'a');
  cleaned = cleaned.replace(/ç/g, 'c');
  cleaned = cleaned.replace(/[èéêë]/g, 'e');
  cleaned = cleaned.replace(/[ìíîï]/g, 'i');
  cleaned = cleaned.replace(/ñ/g, 'n');
  cleaned = cleaned.replace(/[òóôõö]/g, 'o');
  cleaned = cleaned.replace(/[ùúûü]/g, 'u');

  return cleaned;
}
