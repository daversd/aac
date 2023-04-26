export interface Entry {
  name: string,
  authors: string[],
  year: number,
  abstract: string,
  types: EntryType[],
  keywords: string[],
  links: string[],
  imageLink?: string,
  address?: string,
}

export enum EntryType {
  Tutorial = 'Tutorial',
  Video = 'Vídeo',
  Texto = 'Texto',
  Dissertacao = 'Dissertação',
  Tese = 'Tese',
  Podcast = 'Podcast',
  Website = 'Website',
  Artigo = 'Artigo',
  Evento = 'Evento',
  TCC = 'TCC',
  Livro = 'Livro'
}
