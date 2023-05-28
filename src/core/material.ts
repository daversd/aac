/** Interface que representa um material no acervo */
export interface Material {
  /** Nome / título do material */
  name: string,
  /** Lista de autores do material */
  authors: string[],
  /** Ano de produção ou divulgação do material */
  year: number,
  /** Resumo do conteúdo do material */
  abstract: string,
  /** Lista dos tipos do material */
  types: MaterialType[],
  /** Lista de palavras-chave do material */
  keywords: string[],
  /** Lista de links de acesso ao material */
  links: string[],
  /** Link para imagem referencial do material */
  imageLink?: string,
  /** Endereço individualizado do material no acervo */
  address?: string,
  /** Localização do material, onde foi produzido ou publicado, em formato `[latitude, longitude]` */
  location?: [number, number]
}

/** Tipos de material */
export enum MaterialType {
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
