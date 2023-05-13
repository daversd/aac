export function downloadFile (filename: string, text: string) {
  const a = document.createElement('a');
  a.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(text));
  a.setAttribute('download', filename);

  a.style.display = 'none';
  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);
}