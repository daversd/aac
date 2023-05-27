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
    name: 'The Autopoiesis of Architecture, Volume I: A New Framework for Architecture',
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
  },
  {
    name: 'Habitar híbrido: interatividade e experiência na era da cibercultura',
    year: 2007,
    authors: ['Guto Requena'],
    abstract: 'A pesquisa buscou estudar as transformações ocorridas na família contemporânea e em seus modos de vida, verificando os impactos das novas tecnologias de informação e comunicação no cotidiano doméstico e social do habitar híbrido e interativo advindo da virtualidade, analisando a concepção projetual de arquitetura, sua produção e o resultado espacial alcançado em projetos de habitação, fornecendo critérios que possam auxiliar na reflexão sobre o design e a domesticidade.',
    types: [
      EntryType.Texto,
      EntryType.Dissertacao
    ],
    keywords: [
      'cibercultura',
      'espaço',
      'habitação',
      'virtualidade',
      'interatividade',
      'realidades mescladas'
    ],
    links: [
      'https://teses.usp.br/teses/disponiveis/18/18142/tde-20052008-144357/pt-br.php'
    ],
    location: [-22.0185398,-47.8960573]
  },
  {
    name: 'Discrete Assembly and Digital Materials in Architecture',
    year: 2016,
    authors: ['Gilles Retsin'],
    abstract: 'O artigo discute dois projetos que exploram o território de organizações materiais discretas ou digitais em um contexto arquitetônico. Inspirando-se no campo dos Materiais Digitais, este artigo apresenta uma abordagem ao projeto arquitetônico que é fundamentalmente "digital" - não apenas no processo, mas também em sua organização física. O uso de materiais discretos e digitais na arquitetura é defendido tanto do ponto de vista arquitetônico quanto das eficiências relacionadas à automação da construção. Experimentos com montagem robótica estão presos entre, por um lado, o desejo de aumentar a velocidade e, por outro lado, o aumento da complexidade. Este artigo argumenta que a montagem robótica na escala da arquitetura só é viável e escalável no contexto de materiais digitais e computação discreta, que tem um conjunto limitado de problemas de conectividade. Os dois projetos são uma primeira tentativa de traduzir o conceito de Materiais Digitais para o domínio da arquitetura. O resultado é uma arquitetura que é digital em sua organização física. Demonstra como espaços diferenciados, complexos e heterogêneos podem ser alcançados apenas com elementos discretos e serializados.',
    types: [
      EntryType.Texto,
      EntryType.Artigo
    ],
    keywords: [
      'projeto',
      'mereologia',
      'discreto',
      'teoria',
      'robótica',
      'madeira',
      'fabricação digital',
      'aceleracionismo',
      'design digital'
    ],
    links: ['https://www.academia.edu/27897186/Discrete_Assembly_and_Digital_Materials_in_Architecture_ECAADE_2016'],
    location: [51.507666, -0.126519]
  },
  {
    name: 'Three Thousand Years of Algorithmic Rituals: The Emergence of AI from the Computation of Space',
    year: 2019,
    authors: ['Matteo Pasquinelli'],
    abstract: 'Neste trabalho o autor argumenta, através de exemplos históricos (como um ritual indiano e o Perceptron), que a ideia de processos algorítmicos e, especialmente, inteligências artificiais não são invenções ou produtos do nosso tempo presente, elaborando um pronto de vista crítico sobre a relação destas tecnologias e trabalho. "A ideia de espaço computacional ou espaço de auto-computação enfatiza, em particular, que os algoritmos de aprendizado de máquina e IA são sistemas emergentes baseados em uma divisão mundana e material de espaço, tempo, trabalho e relações sociais. O aprendizado de máquina emerge de grades que continuam antigas abstrações e rituais preocupados com a marcação de territórios e corpos, contando pessoas e bens; dessa forma, o aprendizado de máquina emerge essencialmente de uma divisão estendida do trabalho social."',
    types: [
      EntryType.Texto,
      EntryType.Artigo
    ],
    keywords: [
      'algoritmos',
      'inteligencia artificial',
      'ia',
      'teoria',
      'crítica',
      'trabalho',
      'espaço'
    ],
    links: [
      'https://www.e-flux.com/journal/101/273221/three-thousand-years-of-algorithmic-rituals-the-emergence-of-ai-from-the-computation-of-space/',
      'http://worker01.e-flux.com/pdf/article_273221.pdf',
    ],
    location: [49.0158491,8.4095339]
  },
  {
    name: 'A short but believable history of the digital turn in architecture',
    year: 2023,
    authors: ['Mario Carpo'],
    abstract: 'As tecnologias digitais são agora um fato da vida; eles fazem parte de quase tudo o que fazemos. Qualquer arquiteto que esboce o layout de um estacionamento hoje em dia provavelmente está usando mais computação eletrônica do que Frank Gehry fez na década de 1990 para projetar o Guggenheim Bilbao. Como sempre, a inovação técnica permite-nos continuar a fazer o que sempre fizemos, mas mais rápido ou mais barato; o que é uma razão boa o suficiente para que a mudança técnica esteja acontecendo. No caso da construção civil, os custos e a velocidade de entrega são de capital importância para economistas, políticos, incorporadores, bem como para a sociedade em geral. No entanto, para um historiador do design, esse uso puramente quantitativo de tecnologias digitais é apenas marginalmente relevante. Se olharmos para os edifícios como arquitetos, o que importa não é tanto o que as tecnologias digitais podem fazer, mas o que não poderíamos fazer sem elas. Esse é o componente crítico da inovação, e apenas uma investigação sobre esse salto criativo pode nos ajudar a entender por que e como as ferramentas digitais mudaram a forma como a arquitetura é concebida e construída e sua aparência. E com certeza, depois de algumas décadas de inovação técnica orientada por computador, a teoria do design digital e o design digitalmente inteligente já constituem um capítulo significativo na história da arquitetura contemporânea - embora no momento em que escrevo, um capítulo ainda não escrito (com alguns notáveis exceções que serão mencionadas no rodapé bibliográfico, anexo). Eu mesmo cobri partes dessa história em algumas de minhas publicações, e há mais em meu último livro, recém-publicado; quando meus amigos da Fundação Jencks e da e-flux Architecture me pediram para contar essa história em algumas milhares de palavras e mostrá-la como um diagrama, na grande tradição de Charles Jencks, aceitei o desafio com prazer.',
    types: [
      EntryType.Texto,
      EntryType.Artigo
    ],
    keywords: [
      'teoria',
      'inteligência artificial',
      'ia',
      'historia',
      'virada digital',
      'cronologia'
    ],
    links: [
      'https://www.e-flux.com/architecture/chronograms/528659/a-short-but-believable-history-of-the-digital-turn-in-architecture/'
    ],
    location: [51.507666, -0.126519]
  },
  {
    name: 'Computational Tendencies',
    year: 2020,
    authors: ['Alessandro Bava'],
    abstract: 'Os usuários do Autodesk AutoCAD em todo o mundo são estimados em 19,3 milhões. Robert McNeel & Associates Rhinoceros tem (pelo menos) 1 milhão de usuários, e o plug-in do ambiente de programação visual Grasshopper (pelo menos) 130.000. A maior parte da produção arquitetônica contemporânea acontece dentro desses softwares e graças aos algoritmos por trás de suas ferramentas mais simples. Escala, espelhamento e outras funções geométricas, e sua automação potencial, são a base de como a arquitetura é desenhada e conceituada hoje. Pode-se, portanto, argumentar que a maioria, senão toda a arquitetura é digital. No entanto, o que estudiosos e profissionais chamaram de arquitetura digital nas últimas décadas foi tratado apenas como um subgênero do discurso arquitetônico como um todo. Isso se deve em grande parte ao fato de que o trabalho teórico e de design focado em chegar a um acordo com os avanços nas tecnologias digitais tem sido mais focado na criação de um estilo de design que formaliza os processos computacionais, em vez de defender como as tecnologias digitais podem ajudar a melhorar o qualidade do habitat humano.',
    types: [
      EntryType.Texto,
      EntryType.Artigo
    ],
    keywords: [
      'automação',
      'algoritmos',
      'inteligência artificial',
      'ia',
      'design digital',
      'crítica'
    ],
    links: [
      'https://www.e-flux.com/architecture/intelligence/310405/computational-tendencies/'
    ],
    location: [40.8536072,14.2430069]
  },
  {
    name: 'Discrete Automation',
    year: 2019,
    authors: ['Mollie Claypool'],
    abstract: 'A digitalização do mundo contemporâneo permite que até os confins do nosso planeta sejam conectados com relativa facilidade e sejam transformados por dispositivos, algoritmos e plataformas que dependem de informações produzidas pela crescente economia digital. No entanto, ao olhar para a digitalização do ambiente construído, algumas contradições aparecem. Se os projetos arquitetônicos incluem aqueles que são realizados fisicamente como edifícios e não como uma prática da academia, é relativamente óbvio que os elementos que compõem um edifício típico não são montados juntos em uma fábrica em uma cadeia de produção integrada verticalmente como um iPhone ou Amazônia Alexa. Existem algumas exceções, mas, apesar desses avanços, a produção física de nosso ambiente construído continua fortemente dependente de pessoas fora da fábrica e no campo trabalhando em um único canteiro de obras.',
    types: [
      EntryType.Texto,
      EntryType.Artigo
    ],
    keywords: [
      'automação',
      'mereologia',
      'discreto',
      'robótica',
      'fabricação digital',
      'trabalho',
      'design digital',
      'digital',
      'construção'
    ],
    links: [
      'https://www.e-flux.com/architecture/becoming-digital/248060/discrete-automation/'
    ],
    location: [51.507666, -0.126519]
  },
  {
    name: 'Breaking the curve: big data and design',
    year: 2014,
    authors: ['Mario Carpo'],
    abstract: 'O Digital é sobre variação. Sabemos por experiência diária que as muitas mídias digitais que usamos hoje, de texto a imagens e música, estão em permanente fluxo; suas variações podem ser projetadas por um ou mais usuários finais (pense em uma entrada da Wikipédia) ou por algoritmos maquínicos (pense em uma pesquisa no Google) e podem, às vezes, parecer totalmente fora de controle, mudando de maneira aleatória e inescrutável. A mesma lógica se aplica ao design de objetos físicos, desde colheres de chá até prédios inteiros. Desde o início dos anos 1990, os pioneiros da arquitetura digitalmente inteligente afirmam que as ferramentas computacionais para projeto e fabricação podem produzir variações em massa sem custo adicional: economias de escala não se aplicam a um ambiente digital e (dentro de determinados limites) produzidos digitalmente, objetos personalizados em massa, todos individualmente diferentes, não deveriam custar mais do que objetos padronizados e produzidos em massa, todos idênticos. Nesse sentido, a cultura e a tecnologia digitais devem ser vistas como a personificação definitiva da pós-modernidade - um sonho pós-moderno tornado realidade. Mas na arquitetura e no design, as coisas não funcionaram assim. Pois logo no início, a virada digital na arquitetura foi sequestrada por uma ferramenta que logo superou todas as outras para se tornar o protagonista - quase o monopolista - da nova cena do design digital: os modeladores spline.',
    types: [
      EntryType.Texto,
      EntryType.Artigo
    ],
    keywords: [
      'teoria',
      'design digital',
      'continuo',
      'parametricismo',
      'automação',
      'discreto',
      'big data',
      'historia',
      'virada digital',
      'spline'
    ],
    links: [
      'https://www.artforum.com/print/201402/breaking-the-curve-big-data-and-design-45013'
    ],
    location: [51.507666, -0.126519]
  },
  {
    name: 'Space Odyssey: The rise of 3-D technology',
    year: 2017,
    authors: ['Mario Carpo'],
    abstract: 'Hoje, é quase um clichê descrever o surgimento da impressão 3D como um desenvolvimento inovador. A noção de que a técnica representa um ponto de virada decisivo na história da tecnologia ganhou ampla aceitação, com pronunciamentos grandiosos de seu poder vindos de pessoas como Barack Obama, Elon Musk e até Martha Stewart. E como a tecnologia se tornou cada vez mais acessível e amplamente adotada nos anos seguintes, a visão de um mundo impresso em 3-D parece menos ficção científica do que uma realidade que se aproxima rapidamente. De fato, “Mutations-Créations / Imprimer le monde” (Mutations-Creations / Print the World), uma grande exposição inaugurada no Centre Pompidou em Paris este mês, oferece exatamente essa proposta, exibindo produtos impressos em 3-D que são supostamente transformando uma ampla gama de campos. Enquanto isso, esforços estão em andamento para adaptar a tecnologia a aplicações de fabricação aparentemente infinitas, para a criação de tudo, desde roupas até partes do corpo. Na escala arquitetônica, os protótipos de casas já estão sendo impressos em 3D a partir de concreto e, em 2012, a Foster + Partners revelou um projeto para uma colônia lunar a ser construída por robôs que viajam pelo espaço equipados com braços de impressão 3D.',
    types: [
      EntryType.Texto,
      EntryType.Artigo
    ],
    keywords: [
      'teoria',
      'design digital',
      'impressão 3d',
      'fabricação digital',
      'automação',
      'historia'
    ],
    links: [
      'https://www.artforum.com/print/201703/space-odyssey-the-rise-of-3-d-technology-66680'
    ],
    location: [51.507666, -0.126519]
  },
  {
    name: 'Rise of the machines: Mario Carpo on Robotic Construction',
    year: 2020,
    authors: ['Mario Carpo'],
    abstract: 'Computadores eletrônicos existem desde o final da Segunda Guerra Mundial, mas por várias razões, arquitetos e designers não começaram a mexer seriamente com o design auxiliado por computador até o início dos anos 90. Ao fazer isso, os pioneiros da virada digital da arquitetura rapidamente se depararam com uma descoberta inovadora: os computadores que eles usaram para desenhar objetos na tela também poderiam ajudar na fabricação desses mesmos objetos imediatamente. A integração do desenho assistido por computador e da manufatura assistida por computador (CAD-CAM) tornou-se um princípio do design digital, e o maquinário para fabricação controlada numericamente tem sido tão influente e até inspirador para designers quanto o software no coração dos sistemas de computador. eles mesmos.',
    types: [
      EntryType.Texto,
      EntryType.Artigo
    ],
    keywords: [
      'teoria',
      'design digital',
      'robótica',
      'discreto',
      'contínuo',
      'fabricação digital',
      'automação',
      'historia'
    ],
    links: [
      'https://www.artforum.com/print/202003/mario-carpo-on-robotic-construction-82219'
    ],
    location: [51.507666, -0.126519]
  },
  {
    name: 'Intellectual work and augmented intelligence',
    year: 2019,
    authors: ['Alessandro Bava'],
    abstract: 'Compreender as consequências da automação de certos processos lógicos e racionais da inteligência coletiva humana e sua exteriorização em máquinas digitais tornou-se tarefa não oficial do trabalhador intelectual contemporâneo. Se no século XIX a automação de processos mecânicos baseados na termodinâmica e suas consequências para os humanos era o motivo da análise do capitalismo de Karl Marx, hoje a automação cada vez mais difundida das faculdades cognitivas tem o efeito imediato de desvalorizar setores cada vez maiores do que costumava ser conhecido como trabalho de colarinho branco e, portanto, uma mudança potencialmente radical na divisão social do trabalho. A arquitetura como disciplina conceitual e técnica e a construção como prática material são um excelente estudo de caso sobre as mudanças trazidas pela automação e como elas impactam tanto o trabalho intelectual do arquiteto quanto o trabalho manual do construtor. Além disso, falar de arquitetura implica sempre falar de vida, pois a arquitetura é um dispositivo que reifica e produz os mecanismos que definem as formas de vida coletivas.',
    types: [
      EntryType.Texto,
      EntryType.Artigo
    ],
    keywords: [
      'automação',
      'inteligência artificial',
      'ia',
      'design digital',
      'crítica',
      'política',
      'teoria',
      'trabalho'
    ],
    links: [
      'https://www.neroeditions.com/intellectual-work-and-augmented-intelligence/'
    ],
    location: [40.8536072,14.2430069]
  },
];

// adiciona os links calculados automaticamente ao acervo
_acervo.forEach(e => { e.address = getLinkAddress(e); });

export const acervo = _acervo;
