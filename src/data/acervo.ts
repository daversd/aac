import { Entry, EntryType } from '../core/entry';
import { getLinkAddress } from '../utils/get-link-address';

const _acervo: Entry[] = [
  {
    name: 'Habitat [and] intelligence',
    year: 2020,
    authors: ['David Dória'],
    abstract: 'Este texto investiga as consequências da mistura do produto arquitetônico - habitações, com inteligência artificial. Especificamente, ele tenta responder como a arquitetura pode implementar a inteligência artificial para produzir programas emergentes a partir da reconfiguração espacial em projetos habitacionais.',
    types: [
      EntryType.Texto,
      EntryType.Dissertacao
    ],
    keywords: [
      'inteligência artificial',
      'ia',
      'reconfiguração',
      'discreto',
      'automação',
      'habitação',
      'plataformas digitais'
    ],
    links: ['https://www.academia.edu/44757121/Habitat_and_Intelligence_Artificial_Intelligence_as_an_Architectural_Component'],
    location: [51.507666, -0.126519]
  },
  {
    name: 'Pavilhão interativo',
    year: 2016,
    authors: ['David Dória'],
    abstract: 'O presente texto aborda o estudo de um dos caminhos que a arquitetura pode seguir na contemporaneidade: a construção de espaços interativos. Produto de um trabalho de conclusão de curso, este trabalho constrói um breve quadro teórico que resultado de pesquisa e revisão bibliográfica, focando no que constitui a construção de tais espaços, especialmente com a utilização de tecnologias digitais, seu contexto e como tais projetos se realizam.',
    types: [
      EntryType.Texto,
      EntryType.Artigo
    ],
    keywords: [
      'interatividade',
      'espaço',
      'reconfiguração',
      'paramétrico'
    ],
    links: ['https://www.academia.edu/26732137/Arquitetura_Interativa_Espa%C3%A7os_interativos_intermediados_pela_tecnologia'],
    location: [-11.0058282, -37.1855571]
  },
  {
    name: 'Arquitetura interativa: Espaços interativos intermediados pelo digital',
    year: 2014,
    authors: ['David Dória'],
    abstract: 'O presente texto aborda o estudo de um dos caminhos que a arquitetura pode seguir na contemporaneidade: a construção de espaços interativos. Produto de um trabalho de conclusão de curso, este trabalho constrói um breve quadro teórico que resultado de pesquisa e revisão bibliográfica, focando no que constitui a construção de tais espaços, especialmente com a utilização de tecnologias digitais, seu contexto e como tais projetos se realizam. Nota: este trabalho foi originalmente desenvolvido para o XI Seminario Internacional de Arquitectura Digital Reveal da Universidad Piloto de Colombia. Embora não publicado neste formato, o trabalho foi apresentado no seminário em 2 de Setembro, 2016.',
    types: [
      EntryType.Texto,
      EntryType.TCC
    ],
    keywords: [
      'interatividade',
      'espaço',
      'reconfiguração',
      'paramétrico'
    ],
    links: ['https://www.academia.edu/26732137/Arquitetura_Interativa_Espa%C3%A7os_interativos_intermediados_pela_tecnologia'],
    location: [-11.0058282, -37.1855571]
  },
  {
    name: 'Public Parts: resocialized autonomous communal life',
    year: 2021,
    authors: ['David Dória', 'Keshav Ramaswami', 'Mollie Claypool', 'Gilles Retsin'],
    abstract: 'Comunhão encorpora o produto de contratos sociais e comportamentos entre grupos de indivíduos. No caso da habitação social e o estabelecimento dos espaços físicos para o viver, a comunhão é uma interseção destes contratos com as restrições e políticas que as proíbem e permitem ocorrer dentro de certos contextos. Através de um projeto baseado em plataformas chamado Public Parts [2020], este artigo irá também apresentar posições sobre a reificação do comum através de um grupo de metodologias de projeto e implementações de estratégias de automação.',
    types: [
      EntryType.Texto,
      EntryType.Artigo
    ],
    keywords: [
      'comum',
      'inteligência artificial',
      'ia',
      'plataformas digitais',
      'discreto',
      'automação'
    ],
    links: [
      'https://doi.org/10.1177/14780771211039085',
      'https://daviddoria.xyz/writings/public-parts-resocialized-autonomous-communal-life/Public+Parts_IJAC.pdf'
    ],
    location: [51.507666, -0.126519]
  },
  {
    name: 'The Nooscope Manifested: AI as Instrument of Knowledge Extractivism',
    year: 2020,
    authors: ['Vladan Joler', 'Matteo Pasquinelli'],
    abstract: 'O Nooscope é uma cartografia dos limites da inteligência artificial, cuja intenção é provocar tanto as ciências da computação quanto as humanidades. Qualquer mapa é uma perspectiva parcial, uma forma de provocar debates. De maneira semelhante, este mapa é um manifesto - de dissidentes da IA. Seu principal propósito é questionar as mistificações da inteligência artificial. Primeiro, enquanto uma definição técnica de inteligência e, segundo, como uma forma política que seria autônoma da sociedade e da humanidade.',
    types: [
      EntryType.Texto,
      EntryType.Artigo,
      EntryType.Website
    ],
    keywords: [
      'inteligência artificial',
      'ia',
      'informação',
      'big data',
      'trabalho',
      'automação'
    ],
    links: [
      'https://nooscope.ai/',
      'http://nooscope.ai/Pasquinelli_Joler_Nooscope_essay.pdf'
    ],
    location: [49.0087755, 8.4082746]
  },
  {
    name: 'Architecture for the Commons: Participatory Systems in the Age of Platforms',
    year: 2021,
    authors: ['Jose Sanchez'],
    abstract: 'Architecture for the Commons mergulha na análise de como a tectônica de um edifício está fundamentalmente ligada às organizações econômicas que permitem sua existência. Ao traçar as origens e promessas das atuais práticas tecnológicas em design, o livro oferece um caminho alternativo, que reconsidera os meios de alcançar a complexidade por meio de estratégias combinatórias. Esse movimento requer reconsiderar a produção em série com o crowdsourcing e o conteúdo do usuário em mente. As ideias apresentadas serão exploradas através da investigação em design desenvolvida no âmbito do Plethora Project, uma prática de design que explora a utilização de interfaces de videogames como mecanismo de participação e design do utilizador.',
    types: [
      EntryType.Texto,
      EntryType.Livro
    ],
    keywords: [
      'comum',
      'plataformas digitais',
      'discreto',
      'sociologia',
      'fabricação',
      'jogos'
    ],
    links: [
      'https://www.routledge.com/Architecture-for-the-Commons-Participatory-Systems-in-the-Age-of-Platforms/Sanchez/p/book/9781138362369',
      'https://www.plethora-project.com/architecture-for-the-commons'
    ],
    location: [42.3523699, -83.3793885]
  },
  {
    name: 'Parametricism - A New Global Style for Architecture and Urban Design',
    year: 2008,
    authors: ['Patrik Schumacher'],
    abstract: 'Embora o parametricismo tenha suas raízes nas técnicas de animação digital de meados da década de 1990, ele só emergiu completamente nos últimos anos com o desenvolvimento de sistemas avançados de design paramétrico. O parametricismo tornou-se o estilo dominante e único para a prática de vanguarda hoje. É particularmente adequado para o urbanismo em grande escala, como exemplificado por uma série de planos mestres vencedores de concursos de Zaha Hadid Architects.',
    types: [
      EntryType.Texto,
      EntryType.Artigo
    ],
    keywords: [
      'paramétrico',
      'arquitetura',
      'urbano',
      'projeto',
      'parametricismo',
      'teoria',
      'manifesto',
      'digital',
      'estilo'
    ],
    links: ['https://www.patrikschumacher.com/Texts/Parametricism%20-%20A%20New%20Global%20Style%20for%20Architecture%20and%20Urban%20Design.html'],
    location: [51.507666, -0.126519]
  },
  {
    name: 'The Plethora Project',
    year: 2011,
    authors: ['Jose Sanchez'],
    abstract: 'Plethora-Project é um estúdio de design com a missão de acelerar a alfabetização computacional no âmbito da Arquitetura e Design. O projeto foi inspirado no lema "mostre-me suas telas" do grupo de programação ao vivo TopLap, tentando se livrar do obscurantismo no design digital. O projeto foi iniciado em 2011 como uma iniciativa de ensino e cresceu para se tornar um estúdio de design e desenvolvimento de software. Cada projeto desenvolvido avança uma tese de como um repositório de conhecimento, manifestado na forma de construção ou software, pode ser reutilizado pelo público em geral, desenvolvendo uma forma de infraestrutura digital para iniciativas de bricolage. O estúdio acredita em uma abordagem humanística do design, colocando os humanos como responsáveis ​​pelas decisões e questionando os algoritmos de tomada de decisão. A pesquisa nesse sentido pode ser descrita como aumento de inteligência por meio do uso de plataformas digitais.',
    types: [
      EntryType.Website,
      EntryType.Tutorial
    ],
    keywords: [
      'comum',
      'opensource',
      'aberto',
      'ensino',
      'discreto',
      'combinatória'
    ],
    links: ['https://www.plethora-project.com/'],
    location: [42.3523699, -83.3793885]
  },
  {
    name: 'the Autopoiesis of Architecture, Volume I: A New Framework for Architecture',
    year: 2010,
    authors: ['Patrik Schumacher'],
    abstract: 'O objetivo deste trabalho é um sistema teórico abrangente que se oferece à arquitetura como sua autodescrição abrangente, descrevendo a arquitetura de dentro da arquitetura, em sua constituição interna e em sua relação com seu ambiente social. A premissa aqui é que a arquitetura sempre já se constituiu auto-referencialmente, por meio de seu próprio discurso disciplinar autônomo, A teoria aqui proposta, a teoria da autopoiese arquitetônica, enfoca as comunicações arquitetônicas e “observa” essas comunicações para detectar seus padrões típicos. A teoria analisa como as comunicações individuais dependem e reproduzem estruturas de comunicação como as principais distinções, conceitos, valores, estilos, métodos e mídia da disciplina. O livro apresenta, assim, uma análise do discurso da disciplina. Mas a teoria da autopoiese arquitetônica não é concebida como uma teoria científica sobre a arquitetura, escrita de fora. Em vez disso, é uma intervenção teórica de dentro da arquitetura, tentando intervir na trajetória comunicativa contínua da arquitetura, refletindo os padrões de comunicação em evolução da arquitetura em relação ao seu domínio de tarefa social. O texto – se for bem-sucedido – pode funcionar como autodescrição da arquitetura porque descreve, avalia criticamente e aprimora a totalidade discursiva da arquitetura a partir do meio do discurso arquitetônico contemporâneo.',
    types: [
      EntryType.Texto,
      EntryType.Livro
    ],
    keywords: [
      'teoria',
      'autopoiesis'
    ],
    links: [
      'http://www.patrikschumacher.com/Texts/The%20Autopoiesis%20of%20Architecture_Introduction%20to%20Vol%201.htm'
    ],
    location: [51.507666, -0.126519]
  },
  {
    name: 'Discrete timber assembly',
    year: 2020,
    authors: ['Gilles Retsin'],
    abstract: 'Usando uma série de exemplos construídos, este artigo descreve um projeto computacional e método de fabricação para composições de components de madeira, com base na noção do discreto. Esta pesquisa tenta combinar aspectos do campo de Materiais Digitais e Matéria Programável com o campo arquitetônico de Pré-fabricação e Modularidade. Embora esses dois campos estejam em extremos opostos do espectro em termos de escala e operação funcional, esta pesquisa propõe que muitas das propriedades e desafios são transferíveis. Este artigo foi desenvolvido para o Fabricate 2020',
    types: [
      EntryType.Texto,
      EntryType.Artigo
    ],
    keywords: [
      'robótica',
      'fabricação digital',
      'habitação',
      'madeira',
      'design digital',
      'discreto',
      'matéria programável'
    ],
    links: [
      'https://www.academia.edu/43206009/Discrete_Timber_Assembly_FABRICATE_2020'
    ],
    location: [51.507666, -0.126519]
  },
  {
    name: 'Toward Discrete Architecture: Automation takes Command',
    year: 2019,
    authors: ['Gilles Retsin'],
    abstract: 'Este artigo descreve um framework para projeto computacional discreto e fabricação no contexto de automação. Enquanto o design e a fabricação digital são noções técnicas, a automação imediatamente tem repercussões sociais e políticas. A automação relaciona-se com a industrialização e a mecanização - permitindo reconectar historicamente o digital enquanto contorna as décadas pós-modernas, desconstrutivistas ou paramétricas. Usando uma série de protótipos construídos com madeira, este artigo descreverá como as tecnologias combinadas de automação e o discreto permitem eficiências técnicas e novos interesses arquitetônicos. Ambos os projetos são baseados em materiais de CLT / compensado, cortados e dobrados em elementos maiores, que são então montados em estruturas funcionais. Ambos os projetos também são fragmentos de blocos habitacionais maiores. Blocos de construção discretos são apresentados de uma perspectiva técnica como ocupando um espaço entre a matéria programável e a pré-fabricação modular. A madeira é identificada como um material ideal para construção discreta automatizada. A partir de uma perspectiva arquitetônica, o artigo discute as implicações de uma arquitetura baseada em partes que permanecem autônomas do todo. Este trabalho foi desenvolvido para o ACADIA 2019',
    types: [
      EntryType.Texto,
      EntryType.Artigo
    ],
    keywords: [
      'robótica',
      'fabricação digital',
      'habitação',
      'madeira',
      'design digital',
      'discreto',
      'matéria programável',
      'teoria',
      'modular',
      'automação',
      'aceleracionismo',
      'tectônica'
    ],
    links: [
      'https://www.academia.edu/41060237/Toward_Discrete_Architecture_Automation_takes_Command_ACADIA_2019'
    ],
    location: [51.507666, -0.126519]
  }
];

// adiciona os links calculados automaticamente ao acervo
_acervo.forEach(e => { e.address = getLinkAddress(e); });

export const acervo = _acervo;
