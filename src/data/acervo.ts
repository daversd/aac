import { Material, MaterialType } from '../core/material';
import { getLinkAddress } from '../utils/get-link-address';

/**
 * Este é o acervo que exposto pela página - onde todos os materiais que estão disponíveis são armazenados.
 */
const _acervo: Material[] = [
  {
    name: 'Habitat [and] intelligence',
    year: 2020,
    authors: ['David Dória'],
    abstract: 'Este texto investiga as consequências da mistura do produto arquitetônico - habitações, com inteligência artificial. Especificamente, ele tenta responder como a arquitetura pode implementar a inteligência artificial para produzir programas emergentes a partir da reconfiguração espacial em projetos habitacionais.',
    types: [
      MaterialType.Texto,
      MaterialType.Dissertacao
    ],
    keywords: [
      'inteligência artificial',
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
      MaterialType.Texto,
      MaterialType.Artigo
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
      MaterialType.Texto,
      MaterialType.TCC
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
      MaterialType.Texto,
      MaterialType.Artigo
    ],
    keywords: [
      'comum',
      'inteligência artificial',
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
      MaterialType.Texto,
      MaterialType.Artigo,
      MaterialType.Website
    ],
    keywords: [
      'inteligência artificial',
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
      MaterialType.Texto,
      MaterialType.Livro
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
      MaterialType.Texto,
      MaterialType.Artigo
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
      MaterialType.Website,
      MaterialType.Tutorial
    ],
    keywords: [
      'comum',
      'opensource',
      'projeto aberto',
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
      MaterialType.Texto,
      MaterialType.Livro
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
      MaterialType.Texto,
      MaterialType.Artigo
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
      MaterialType.Texto,
      MaterialType.Artigo
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
      MaterialType.Texto,
      MaterialType.Dissertacao
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
    location: [-22.0185398, -47.8960573]
  },
  {
    name: 'Discrete Assembly and Digital Materials in Architecture',
    year: 2016,
    authors: ['Gilles Retsin'],
    abstract: 'O artigo discute dois projetos que exploram o território de organizações materiais discretas ou digitais em um contexto arquitetônico. Inspirando-se no campo dos Materiais Digitais, este artigo apresenta uma abordagem ao projeto arquitetônico que é fundamentalmente "digital" - não apenas no processo, mas também em sua organização física. O uso de materiais discretos e digitais na arquitetura é defendido tanto do ponto de vista arquitetônico quanto das eficiências relacionadas à automação da construção. Experimentos com montagem robótica estão presos entre, por um lado, o desejo de aumentar a velocidade e, por outro lado, o aumento da complexidade. Este artigo argumenta que a montagem robótica na escala da arquitetura só é viável e escalável no contexto de materiais digitais e computação discreta, que tem um conjunto limitado de problemas de conectividade. Os dois projetos são uma primeira tentativa de traduzir o conceito de Materiais Digitais para o domínio da arquitetura. O resultado é uma arquitetura que é digital em sua organização física. Demonstra como espaços diferenciados, complexos e heterogêneos podem ser alcançados apenas com elementos discretos e serializados.',
    types: [
      MaterialType.Texto,
      MaterialType.Artigo
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
      MaterialType.Texto,
      MaterialType.Artigo
    ],
    keywords: [
      'algoritmos',
      'inteligência artificial',
      'teoria',
      'crítica',
      'trabalho',
      'espaço'
    ],
    links: [
      'https://www.e-flux.com/journal/101/273221/three-thousand-years-of-algorithmic-rituals-the-emergence-of-ai-from-the-computation-of-space/',
      'http://worker01.e-flux.com/pdf/article_273221.pdf'
    ],
    location: [49.0158491, 8.4095339]
  },
  {
    name: 'A short but believable history of the digital turn in architecture',
    year: 2023,
    authors: ['Mario Carpo'],
    abstract: 'As tecnologias digitais são agora um fato da vida; eles fazem parte de quase tudo o que fazemos. Qualquer arquiteto que esboce o layout de um estacionamento hoje em dia provavelmente está usando mais computação eletrônica do que Frank Gehry fez na década de 1990 para projetar o Guggenheim Bilbao. Como sempre, a inovação técnica permite-nos continuar a fazer o que sempre fizemos, mas mais rápido ou mais barato; o que é uma razão boa o suficiente para que a mudança técnica esteja acontecendo. No caso da construção civil, os custos e a velocidade de entrega são de capital importância para economistas, políticos, incorporadores, bem como para a sociedade em geral. No entanto, para um historiador do design, esse uso puramente quantitativo de tecnologias digitais é apenas marginalmente relevante. Se olharmos para os edifícios como arquitetos, o que importa não é tanto o que as tecnologias digitais podem fazer, mas o que não poderíamos fazer sem elas. Esse é o componente crítico da inovação, e apenas uma investigação sobre esse salto criativo pode nos ajudar a entender por que e como as ferramentas digitais mudaram a forma como a arquitetura é concebida e construída e sua aparência. E com certeza, depois de algumas décadas de inovação técnica orientada por computador, a teoria do design digital e o design digitalmente inteligente já constituem um capítulo significativo na história da arquitetura contemporânea - embora no momento em que escrevo, um capítulo ainda não escrito (com alguns notáveis exceções que serão mencionadas no rodapé bibliográfico, anexo). Eu mesmo cobri partes dessa história em algumas de minhas publicações, e há mais em meu último livro, recém-publicado; quando meus amigos da Fundação Jencks e da e-flux Architecture me pediram para contar essa história em algumas milhares de palavras e mostrá-la como um diagrama, na grande tradição de Charles Jencks, aceitei o desafio com prazer.',
    types: [
      MaterialType.Texto,
      MaterialType.Artigo
    ],
    keywords: [
      'teoria',
      'inteligência artificial',
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
      MaterialType.Texto,
      MaterialType.Artigo
    ],
    keywords: [
      'automação',
      'algoritmos',
      'inteligência artificial',
      'design digital',
      'crítica'
    ],
    links: [
      'https://www.e-flux.com/architecture/intelligence/310405/computational-tendencies/'
    ],
    location: [40.8536072, 14.2430069]
  },
  {
    name: 'Discrete Automation',
    year: 2019,
    authors: ['Mollie Claypool'],
    abstract: 'A digitalização do mundo contemporâneo permite que até os confins do nosso planeta sejam conectados com relativa facilidade e sejam transformados por dispositivos, algoritmos e plataformas que dependem de informações produzidas pela crescente economia digital. No entanto, ao olhar para a digitalização do ambiente construído, algumas contradições aparecem. Se os projetos arquitetônicos incluem aqueles que são realizados fisicamente como edifícios e não como uma prática da academia, é relativamente óbvio que os elementos que compõem um edifício típico não são montados juntos em uma fábrica em uma cadeia de produção integrada verticalmente como um iPhone ou Amazônia Alexa. Existem algumas exceções, mas, apesar desses avanços, a produção física de nosso ambiente construído continua fortemente dependente de pessoas fora da fábrica e no campo trabalhando em um único canteiro de obras.',
    types: [
      MaterialType.Texto,
      MaterialType.Artigo
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
      MaterialType.Texto,
      MaterialType.Artigo
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
      MaterialType.Texto,
      MaterialType.Artigo
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
      MaterialType.Texto,
      MaterialType.Artigo
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
      MaterialType.Texto,
      MaterialType.Artigo
    ],
    keywords: [
      'automação',
      'inteligência artificial',
      'design digital',
      'crítica',
      'política',
      'teoria',
      'trabalho'
    ],
    links: [
      'https://www.neroeditions.com/intellectual-work-and-augmented-intelligence/'
    ],
    location: [40.8536072, 14.2430069]
  },
  {
    name: 'AI + Architecture | Towards a New Approach',
    year: 2019,
    authors: ['Stanislas Chaillou'],
    abstract: 'A Inteligência Artificial, como disciplina, já permeia inúmeros campos, trazendo meios e métodos para desafios antes não resolvidos, em todos os setores. O advento da IA na arquitetura ainda está em seus primórdios, mas oferece resultados promissores. Mais do que uma mera oportunidade, tal potencial representa para nós um grande passo à frente, prestes a reformular a disciplina arquitetônica. Nosso trabalho se propõe a evidenciar essa promessa quando aplicada ao ambiente construído. Especificamente, oferecemos a aplicação de IA na análise e geração de plantas baixas. Nosso objetivo final é triplo: (1) gerar plantas baixas, ou seja, otimizar a geração de uma quantidade grande e altamente diversificada de projetos de plantas baixas, (2) qualificar as plantas baixas, ou seja, oferecer uma metodologia de classificação adequada (3) para permitir que os usuários "naveguem" pelas opções de design geradas. A nossa metodologia segue duas intuições principais (1) a criação de planos de edifícios é um desafio técnico não trivial, embora englobe técnicas de otimização padrão, e (2) o projeto do espaço é um processo sequencial, exigindo sucessivas etapas de projeto em diferentes escalas (urbanas escala, escala de construção, escala de unidade). Então, a fim de aproveitar essas duas realidades, escolhemos redes neurais adversárias generativas aninhadas ou GANs. Esses modelos nos permitem capturar mais complexidade nas plantas baixas encontradas e quebrar a complexidade abordando os problemas por meio de etapas sucessivas. Cada etapa correspondente a um determinado modelo, especificamente treinado para essa tarefa específica, o processo pode eventualmente evidenciar o possível vaivém entre humanos e máquinas.',
    types: [
      MaterialType.Texto,
      MaterialType.Dissertacao
    ],
    keywords: [
      'inteligência artificial',
      'gan',
      'design generativo',
      'planta baixa',
      'desenho',
      'otimização',
      'qualificação'
    ],
    links: [
      'https://www.academia.edu/39599650/AI_Architecture_Towards_a_New_Approach'
    ],
    location: [42.3563938, -71.1302247]
  },
  {
    name: 'The Advent of Architectural AI | A Historical Perspective',
    year: 2019,
    authors: ['Stanislas Chaillou'],
    abstract: 'A prática da Arquitetura, seus métodos, tradições e saberes estão hoje no centro de debates apaixonados. Desafiada por forasteiros, chegando com novas práticas e questionada por dentro, pois os praticantes duvidam de seu estado atual, a Arquitetura está passando por uma (r)evolução verdadeiramente profunda. Entre os fatores que deixarão um impacto duradouro em nossa disciplina, a tecnologia certamente é um dos principais vetores em jogo. A introdução de soluções tecnológicas em todas as etapas da cadeia de valor já transformou significativamente a Arquitetura. De fato, a concepção de edifícios já iniciou uma lenta transformação: primeiro alavancando novas técnicas de construção, depois desenvolvendo software adequado e, finalmente, hoje introduzindo recursos de computação estatística (incluindo Data Science & AI). Mais do que uma ruptura, queremos ver aqui uma continuidade que conduziu a Arquitetura por sucessivas evoluções até aos dias de hoje. Modularidade, Design Computacional, Parametricismo e finalmente Inteligência Artificial são para nós os quatro passos intrincados de uma transição lenta. Além do pano de fundo histórico, postulamos que essa evolução é o wireframe de uma melhoria radical na concepção arquitetônica.',
    types: [
      MaterialType.Texto,
      MaterialType.Artigo
    ],
    keywords: [
      'inteligência artificial',
      'historia',
      'cronologia',
      'design paramétrico'
    ],
    links: [
      'https://www.academia.edu/39802404/The_Advent_of_Architectural_AI_A_Historical_Perspective',
      'https://towardsdatascience.com/the-advent-of-architectural-ai-706046960140'
    ],
    location: [42.3563938, -71.1302247]
  },
  {
    name: 'Architecture as a Graph | A Computational Approach',
    year: 2020,
    authors: ['Stanislas Chaillou', 'Jeffrey Landes', 'Hakon Fure', 'Hakon Dissen'],
    abstract: 'O projeto de plantas baixas pode alavancar a intuição da máquina para gerar e qualificar possíveis opções de projeto. Neste artigo, abordamos uma abstração específica do espaço: a adjacência. Qualquer planta baixa carrega sua própria lógica incorporada; em claro, a colocação relativa dos quartos e suas conexões é conduzida por uma certa lógica de interdependência e produz qualidades variadas ao longo do espaço. Por exemplo, a presença de um espaço condicionará a existência de outros espaços, bem como a posição das aberturas entre eles. Primeiro, tentamos aqui qualificar as adjacências das plantas existentes, para avaliar a relevância das adjacências entre os cômodos. Mais tarde, nos voltamos para a modelagem Bayesiana para gerar grafos de adjacência, livremente ou sob restrições definidas. Ao qualificar e gerar, nossa esperança é investigar os dois lados de um mesmo problema: a compreensão das relações entre os espaços vizinhos.',
    types: [
      MaterialType.Texto,
      MaterialType.Artigo
    ],
    keywords: [
      'inteligência artificial',
      'matemática',
      'grafos',
      'planta baixa',
      'redes bayesianas'
    ],
    links: [
      'https://www.academia.edu/42059688/Architecture_as_a_Graph_A_Computational_Approach',
      'https://towardsdatascience.com/architecture-as-a-graph-6a835d46f918'
    ],
    location: [59.8938549, 10.7851165]
  },
  {
    name: 'The Digital Turn in Architecture: 1992-2012',
    year: 2012,
    authors: ['Mario Carpo', 'Vários'],
    abstract: 'Uma seleção de artigos e ensaios sobre design digital e teoria digital publicados pela Architectural Design (AD) de 1992 a 2012. Inclui textos seminais de Bernard Cache, Peter Eisenman, John Frazer, Charles Jencks, Greg Lynn, Achim Menges e Patrik Schumacher; apresenta obras importantes de FOA, Frank Gehry, Zaha Hadid, Ali Rahim, Lars Spuybroek/NOX, Kas Oosterhuis, SHoP e outros. Mario Carpo fornece uma visão geral da recente ascensão à preeminência do design e produção baseados em computador em seu abrangente ensaio introdutório e em seu comentário para cada texto original.',
    types: [
      MaterialType.Texto,
      MaterialType.Livro
    ],
    keywords: [
      'teoria',
      'design digital',
      'design paramétrico',
      'contínuo',
      'fabricação digital',
      'virada digital',
      'historia',
      'cronologia'
    ],
    links: [
      'https://mariocarpo.com/books/the-digital-turn-in-architecture-1992-2012',
      'https://www.wiley.com/en-us/The+Digital+Turn+in+Architecture+1992+2012-p-9781119951759'
    ],
    location: [51.507666, -0.126519]
  },
  {
    name: 'The Alphabet and the Algorithm',
    year: 2011,
    authors: ['Mario Carpo'],
    abstract: 'As tecnologias digitais mudaram a arquitetura - a forma como ela é ensinada, praticada, gerenciada e regulamentada. Mas se o digital criou uma "mudança de paradigma" para a arquitetura, qual paradigma está mudando? Em O Alfabeto e o Algoritmo, Mario Carpo aponta para uma prática fundamental da modernidade: a produção de cópias idênticas. Carpo destaca dois exemplos de identidade cruciais para a configuração da modernidade arquitetônica: no século XV, a invenção do projeto arquitetônico por Leon Battista Alberti, segundo a qual um edifício é uma cópia idêntica do projeto do arquiteto; e, nos séculos XIX e XX, a produção em massa de cópias idênticas a partir de modelos mestre mecânicos, matrizes, impressões ou moldes. O poder moderno do idêntico, argumenta Carpo, chegou ao fim com o surgimento das tecnologias digitais. Tudo o que é digital é variável. Na arquitetura, isso significa o fim das limitações de notação, da padronização mecânica e do modo autoral albertiano de construir por projeto. Mapeando a ascensão e queda do paradigma da identidade, Carpo compara novas formas de artesanato digital pós-industrial à fabricação manual e às culturas e tecnologias de variações que existiam antes da chegada das cópias idênticas feitas à máquina. Carpo analisa o desdobramento do design e da construção digital desde o início dos anos 1990 até o presente e sugere uma nova agenda para a arquitetura em uma era de objetos variáveis e de autoria genérica e participativa.',
    types: [
      MaterialType.Texto,
      MaterialType.Livro
    ],
    keywords: [
      'teoria',
      'design digital',
      'design paramétrico',
      'fabricação digital',
      'historia'
    ],
    links: [
      'https://mariocarpo.com/books/the-alphabet-and-the-algorithm',
      'https://mitpress.mit.edu/9780262515801/the-alphabet-and-the-algorithm/'
    ],
    location: [51.507666, -0.126519]
  },
  {
    name: 'The Second Digital Turn: Design Beyond Intelligence',
    year: 2017,
    authors: ['Mario Carpo'],
    abstract: 'Há quase uma geração, os primeiros softwares para projeto e fabricação auxiliados por computador (CAD/CAM) geraram um estilo de linhas e superfícies suaves e curvas que deram forma visível à primeira era digital e deixaram uma marca indelével na arquitetura contemporânea. Mas a arquitetura digitalmente inteligente de hoje não parece mais assim. Em The Second Digital Turn, Mario Carpo explica que isso ocorre porque as profissões de design estão agora aceitando um novo tipo de ferramentas digitais que adotaram - não mais ferramentas para fazer, mas ferramentas para pensar. No início da década de 1990, os profissionais de design foram os primeiros a intuir e interpretar a nova lógica técnica da era digital: a customização digital em massa (o uso de ferramentas digitais para produzir variações em massa sem nenhum custo extra) já mudou a forma como produzimos e consomem quase tudo, e a mesma tecnologia aplicada ao comércio em geral está agora anunciando uma nova sociedade sem escala - uma sociedade de custo marginal plano onde mercados maiores não farão nada mais barato. Mas hoje, o poder sem precedentes da computação também favorece um novo tipo de ciência em que a previsão pode ser baseada na simples recuperação de informações e a descoberta de formas por simulação e otimização pode substituir a dedução de fórmulas matemáticas. Há algum tempo que os designers brincam com o pensamento de máquina e o aprendizado de máquina, e a complexidade aparentemente insondável das formas físicas que agora estão criando já expressa uma nova forma de inteligência artificial, fora da tradição da ciência moderna e alheia à lógica orgânica de nossa mente.',
    types: [
      MaterialType.Texto,
      MaterialType.Livro
    ],
    keywords: [
      'teoria',
      'design digital',
      'fabricação digital',
      'virada digital',
      'big data',
      'historia'
    ],
    links: [
      'https://mariocarpo.com/books/the-second-digital-turn-design-beyond-intelligence',
      'https://mitpress.mit.edu/9780262534024/the-second-digital-turn/'
    ],
    location: [51.507666, -0.126519]
  },
  {
    name: 'Beyond Digital: Design and Automation at the End of Modernity',
    year: 2023,
    authors: ['Mario Carpo'],
    abstract: 'A produção em massa era a lógica técnica central da modernidade industrial: nos últimos cem anos, arquitetos e designers tentaram industrializar a construção e padronizar materiais e processos de construção na busca de economias de escala. Mas esta marcha histórica da modernidade acabou. Em Beyond Digital, Mario Carpo revê a longa história do modo de produção computacional, mostrando como a fusão da automação robótica e da inteligência artificial irá parar e reverter a busca modernista por escala. As tecnologias de hoje já nos permitem usar materiais de construção não padronizados como encontrados ou fabricados, e montá-los de tantas maneiras adaptativas, inteligentes e não padronizadas quanto necessário: as microfábricas de nosso futuro iminente serão oficinas artesanais automatizadas. A lógica pós-industrial da manufatura computacional é conhecida e teorizada há algum tempo. Ao rastrear suas fontes teóricas e técnicas e revisar as teorias de design que acompanharam seu surgimento, Carpo mostra como o projeto computacional, há muito sob o domínio de poderosas ideologias anti-modernas, agora está sendo reformulado pela urgência da crise climática, que justificou sua premissas - e pela pandemia global, que tragicamente provou sua viabilidade. Olhando para o trabalho de uma nova geração de designers, tecnólogos e produtores, Beyond Digital oferece uma nova agenda moderna para o nosso futuro pós-industrial.',
    types: [
      MaterialType.Texto,
      MaterialType.Livro
    ],
    keywords: [
      'teoria',
      'design digital',
      'fabricação digital',
      'robótica',
      'inteligência artificial',
      'microfábrica',
      'historia'
    ],
    links: [
      'https://mariocarpo.com/books/beyond-digital-design-and-automation-at-the-end-of-modernity',
      'https://mitpress.mit.edu/9780262545150/beyond-digital/'
    ],
    location: [51.507666, -0.126519]
  },
  {
    name: 'Digital architecture beyond computers: Fragments of a cultural history of computational design',
    year: 2018,
    authors: ['Roberto Bottazzi'],
    abstract: 'O livro explora a profunda história da arquitetura digital, traçando conceitos de design desde o Renascimento e conectando-os com o software mais recente usado por designers hoje. Ele desenvolve um relato crítico de como as ferramentas e técnicas de design digital surgiram e permite que os designers aprofundem sua compreensão das ferramentas digitais que usam todos os dias. Que conceitos estéticos, espaciais e filosóficos convergem nas ferramentas digitais que os arquitetos empregam? Qual é a história deles? E que tipos de técnicas e designs eles deram origem? Este livro explora as respostas a essas perguntas, mostrando como a arquitetura digital reúne ideias e trajetórias complexas que abrangem vários domínios e evoluíram ao longo de muitos séculos. Ele se propõe a descompactar essas ideias, traçar sua origem e permeação na arquitetura e reexaminar seu uso em software contemporâneo. Os capítulos são organizados em torno das histórias de nove \'fragmentos\' - cada um um conceito fundamental embutido em aplicativos CAD populares: banco de dados, camadas e campos, parametria, pixel, programa, aleatoriedade, varredura, topologia e voxel/maxel - com cada tema examinado através de uma série de estudos de caso históricos e contemporâneos. O livro, portanto, conecta o processo de design digital com a história e a teoria da arquitetura, permitindo que designers e teóricos desenvolvam ferramentas mais analíticas e críticas com as quais conceituar o design digital e seu software.',
    types: [
      MaterialType.Texto,
      MaterialType.Livro
    ],
    keywords: [
      'teoria',
      'design digital',
      'fabricação digital',
      'robótica',
      'design paramétrico',
      'design generativo',
      'historia'
    ],
    links: [
      'https://www.bloomsbury.com/uk/digital-architecture-beyond-computers-9781474258135/'
    ],
    location: [51.507666, -0.126519]
  },
  {
    name: 'An Evolutionary Architecture',
    year: 1995,
    authors: ['John Frazer'],
    abstract: 'An Evolutionary Architecture de John Frazer, escrito em 1995, propõe uma mudança fundamental na prática. \'O papel do arquiteto aqui, penso eu, não é tanto projetar um edifício ou uma cidade, mas catalisá-los: agir para que possam evoluir.\' Gordon Pask em seu prefácio. A maior parte do livro concentra-se no trabalho da Diploma Unit 11 dirigida por John e Julia Frazer (com Pete Silver e Guy Westbrook) entre 1989 e 1996, mas inclui trabalho formativo do autor que remonta ao seu projeto premiado de diploma no AA em 1969 e trabalho de pesquisa relacionado na Universidade de Cambridge.',
    types: [
      MaterialType.Texto,
      MaterialType.Livro
    ],
    keywords: [
      'design digital',
      'interatividade',
      'evolução',
      'design generativo',
      'historia'
    ],
    links: [
      'https://issuu.com/aaschool/docs/an-evolutionary-architecture-webocr'
    ],
    location: [51.507666, -0.126519]
  },
  {
    name: 'Architectural Intelligence: How Designers and Architects Created the Digital Landscape',
    year: 2017,
    authors: ['Molly Wright Steenson'],
    abstract: 'Arquitetos que se envolveram com cibernética, inteligência artificial e outras tecnologias lançaram as bases para a interatividade digital. Em Architectural Intelligence, Molly Wright Steenson explora o trabalho de quatro arquitetos nas décadas de 1960 e 1970 que incorporaram elementos de interatividade em seu trabalho. Christopher Alexander, Richard Saul Wurman, Cedric Price e Nicholas Negroponte e o MIT Architecture Machine Group incorporaram tecnologias incluindo cibernética e inteligência artificial em seu trabalho e influenciaram as práticas de design digital desde o final dos anos 1980 até os dias atuais. Alexander, muito antes de seu famoso livro A Pattern Language, de 1977, usava computação e estrutura para visualizar problemas de projeto; Wurman popularizou a noção de "arquitetura da informação"; Price projetou alguns dos primeiros edifícios inteligentes; e Negroponte experimentou as formas como as pessoas experimentam a inteligência artificial, mesmo em escala arquitetônica. Steenson investiga como esses arquitetos ultrapassaram os limites da arquitetura - e como seus experimentos tecnológicos ultrapassaram os limites da tecnologia. O que os pesquisadores computacionais, cibernéticos e de inteligência artificial têm a ganhar ao se envolver com arquitetos e problemas arquitetônicos? E qual foi esse novo espaço que surgiu nessas colaborações? Às vezes, escreve Steenson, os arquitetos deste livro se caracterizam como anti-arquitetos e seu trabalho como anti-arquitetura. Os projetos que Steenson examina em sua maioria não resultaram em edifícios construídos, mas sim em processos e ferramentas de design, programas de computador, interfaces, ambientes digitais. Alexander, Wurman, Price e Negroponte lançaram as bases para muitas de nossas práticas interativas contemporâneas, da arquitetura da informação ao design de interação, do aprendizado de máquina às cidades inteligentes.',
    types: [
      MaterialType.Texto,
      MaterialType.Livro
    ],
    keywords: [
      'design digital',
      'interatividade',
      'teoria',
      'cronologia',
      'historia',
      'inteligência artificial',
      'cibernética'
    ],
    links: [
      'https://mitpress.mit.edu/9780262546782/architectural-intelligence/',
      'https://direct.mit.edu/books/book/3643/Architectural-IntelligenceHow-Designers-and'
    ],
    location: [40.4432027, -79.9450386]
  },
  {
    name: 'The Second Digital Turn @ Talks at Google',
    year: 2018,
    authors: ['Mario Carpo'],
    abstract: 'Nesta palestra, Mario Carpo fala sobre seu livro The Second Digital Turn para uma plateia do Google',
    types: [
      MaterialType.Video
    ],
    keywords: [
      'teoria',
      'design digital',
      'fabricação digital',
      'virada digital',
      'big data',
      'historia'
    ],
    links: [
      'https://www.youtube.com/watch?v=UVerq5DSdKU'
    ],
    location: [51.507666, -0.126519]
  },
  {
    name: 'Introducing digital fabrication into the architectural curriculum',
    year: 2008,
    authors: ['Gabriela Celani', 'Regiane Pupo', 'José Pinto Duarte'],
    abstract: 'O presente artigo descreve duas experiências semelhantes na implantação de laboratórios de fabricação digital em escolas de arquitetura e a introdução dessas técnicas no currículo escolar, com o objetivo de responder às seguintes questões: quanto tempo - e quanto - leva para incorporar essas novas tecnologias em um curso tradicional de arquitetura? Ambas as experiências foram realizadas em países de língua portuguesa, mas em contextos econômicos e culturais muito diferentes (Europa e América do Sul)',
    types: [
      MaterialType.Texto,
      MaterialType.Artigo
    ],
    keywords: [
      'prototipagem',
      'fabricação digital',
      'educação'
    ],
    links: [
      'https://www.academia.edu/98085620/Introducing_digital_fabrication_into_the_architectural_curriculum'
    ],
    location: [-22.8174239, -47.0675149]
  },
  {
    name: 'O futuro do detalhamento arquitetônico: concepção e representação na era digital, e impactos para a formação dos arquitetos',
    year: 2017,
    authors: ['Gabriela Celani', 'Caio Castriotto', 'Guilherme Giantini', 'Verley Côco'],
    abstract: 'Este artigo tem como objetivo contribuir para a discussão sobre o ensino do detalhamento na formação de arquitetos no Brasil. Ele começa apresentando uma breve revisão da literatura sobre o detalhamento dos pontos de vista técnico e teórico, seguida por uma apresentação de exemplos recentes do uso de tecnologias de fabricação digital na arquitetura. É apresentada também uma descrição sobre a representação digital de detalhes arquitetônicos por meio de modelagem da informação do edifício e por representações algorítmicas e paramétricas. O artigo termina com uma discussão a respeito da relação entre o detalhe e o uso dos meios digitais no processo de projeto e produção da arquitetura, e suas implicações para a formação do arquiteto no século XXI',
    types: [
      MaterialType.Texto,
      MaterialType.Artigo
    ],
    keywords: [
      'detalhamento',
      'fabricação digital',
      'design digital',
      'educação'
    ],
    links: [
      'https://www.academia.edu/98085618/O_futuro_do_detalhamento_arquitet%C3%B4nico_concep%C3%A7%C3%A3o_e_representa%C3%A7%C3%A3o_na_era_digital_e_impactos_para_a_forma%C3%A7%C3%A3o_dos_arquitetos'
    ],
    location: [-22.8174239, -47.0675149]
  },
  {
    name: 'Personalizado ou flexível? Abordagens para personalização adaptativa em arquitetura',
    year: 2021,
    authors: ['Gabriela Celani', 'Raquel Leite'],
    abstract: 'O ato de personalizar o ambiente construído tem sido exercido ao longo de muitos anos como maneira de atender a diferentes demandas e criar relações de identidade. Espaços dotados de flexibilidade, seja ela relacionada às características construtivas, aos equipamentos internos ou à combinação entre ambos, são capazes de acomodar essa personalização ao longo do tempo, permitindo que as pessoas adaptem os espaços segundo novas necessidades. Contudo, muitas vezes, os edifícios produzidos em massa, principalmente os habitacionais, têm uma configuração muito rígida que dificulta essa adaptação. Assim, devido a diversos fatores, surgem conflitos de uso e de ocupação dos espaços. Mais recentemente, após a Terceira Revolução Industrial, a personalização em série de produtos de consumo tornou possível gerar soluções individualizadas com uma eficiência muito semelhante à da produção em massa. Em arquitetura, esse paradigma tem possibilitado ampliar a variedade de alternativas de projeto. No entanto, essa diversidade inicial geralmente não se prolonga para a reconfiguração do ambiente construído, repercutindo em uma personalização que não é  flexível. Diante dessas questões, o presente artigo, que faz parte de uma pesquisa de mestrado, tem como objetivo investigar abordagens de projeto que possibilitem a convergência entre a flexibilidade e a personalização em série em arquitetura.',
    types: [
      MaterialType.Texto,
      MaterialType.Artigo
    ],
    keywords: [
      'personalização',
      'flexibilidade',
      'interatividade',
      'modularidade',
      'habitação'
    ],
    links: [
      'https://www.academia.edu/98085617/Personalizado_ou_flex%C3%ADvel_Abordagens_para_personaliza%C3%A7%C3%A3o_adaptativa_em_arquitetura'
    ],
    location: [-22.8174239, -47.0675149]
  },
  {
    name: 'Estruturas recíprocas: revisão sistemática da literatura e identificação de pontos críticos para projeto e produção',
    year: 2020,
    authors: ['Gabriela Celani', 'Caio Castriotto', 'Felipe Tavares'],
    abstract: 'Estruturas recíprocas (ERs) são datadas do período neolítico, produzidas originalmente em madeira e compostas por elementos de dimensões reduzidas. Trata-se de um sistema estrutural que apresenta a capacidade de se adaptar a formas livres, complexas e com grande potencial estético, como indicado por diversas pesquisas contemporâneas. No entanto,acredita-se que essas estruturas poderiam fazer melhor uso das tecnologias digitais disponíveis de projeto, análises, fabricação e montagem. Este artigo tem o objetivo de identificar as atuais lacunas em que se pode concentrar esforços de pesquisa no sentido de tornar a tecnologia das ERs mais viável. Foi feita uma revisão sistemática da literatura (RSL) em sete bases de dados diferentes. Encontrou-se um total de 180 artigos, dos quais 49 foram selecionados para análise. Dentre eles, 27 identificaram lacunas existentes, que foram compiladas em cinco categorias: (a) dificuldades na concepção geométrica/estrutural; (b) necessidade de aprimoramento de ferramentas digitais; (c) dificuldade no projeto, análise,fabricação e montagem de conexões; (d) dificuldade de compreensão da real contribuição dos protótipos para aplicações em grande escala; e (e) necessidade de incorporar o processo de montagem no projeto de ERs. Foi possível concluir que o desenvolvimento de novos mecanismos de análise estrutural aliados à criação de novos detalhes construtivos pode contribuir para a expansão do uso das ERs.',
    types: [
      MaterialType.Texto,
      MaterialType.Artigo
    ],
    keywords: [
      'estrutura recíproca',
      'revisão de literatura',
      'fabricação digital',
      'design digital'
    ],
    links: [
      'https://www.academia.edu/98085614/Estruturas_rec%C3%ADprocas_revis%C3%A3o_sistem%C3%A1tica_da_literatura_e_identifica%C3%A7%C3%A3o_de_pontos_cr%C3%ADticos_para_projeto_e_produ%C3%A7%C3%A3o'
    ],
    location: [-22.8174239, -47.0675149]
  },
  {
    name: 'Além da avaliação energética e ambiental nas etapas iniciais do processo de projeto',
    year: 2012,
    authors: ['Gabriela Celani'],
    abstract: 'Este trabalho descreve o uso de um aplicativo de análise simplificada de desempenho energético em uma disciplina de projeto de arquitetura de quarto ano, discutindo sua contribuição para o processo de tomada de decisão e refletindo em seguida sobre duas importantes questões: a relação entre o projeto e o desempenho do edifício e a relação entre o ensino de projeto e o ensino da informática aplicada.',
    types: [
      MaterialType.Texto,
      MaterialType.Artigo
    ],
    keywords: [
      'educação',
      'design digital',
      'projeto',
      'performance',
      'ambiente',
      'avaliação'
    ],
    links: [
      'https://www.academia.edu/98085613/Al%C3%A9m_da_avalia%C3%A7%C3%A3o_energ%C3%A9tica_e_ambiental_nas_etapas_iniciais_do_processo_de_projeto'
    ],
    location: [-22.8174239, -47.0675149]
  },
  {
    name: 'Algorithm-Aided Design with Python: Analysis of Technological Competence of Subjects',
    year: 2018,
    authors: ['Gabriela Celani', 'Thiago Bessa', 'Guilhermina Lobato'],
    abstract: 'Dificuldades em aprender programação para novatos é um assunto de abundante literatura científica. Essas dificuldades parecem ser acentuadas em alunos cuja escolha acadêmica não é a computação, como os alunos de arquitetura. No entanto, eles precisam estudar programação, já que faz parte dos novos currículos acadêmicos. Os resultados aqui apresentados fazem parte de uma pesquisa de doutorado, que investiga a motivação para a realização e a aquisição e transferência de conhecimento de programação a partir de um ambiente online projetado com base no modelo de design instrucional 4C-ID. Esses resultados se referem à análise sociodemográfica e à competência tecnológica desses sujeitos. Concluímos que a maioria dos alunos de nossa amostra não sabe autoavaliar seu nível de conhecimento em TIC, pois acredita ter conhecimento computacional suficiente para suas necessidades. No entanto, a maioria relatou ter dificuldade em criar códigos. No entanto, eles reconheceram a importância de aprender a programar, acharam que era valioso para os alunos e se sentiram motivados a adquirir essa nova habilidade.',
    types: [
      MaterialType.Texto,
      MaterialType.Artigo
    ],
    keywords: [
      'educação',
      'design digital',
      'programação',
      'algoritmos'
    ],
    links: [
      'https://www.academia.edu/98085612/Algorithm_Aided_Design_with_Python_Analysis_of_Technological_Competence_of_Subjects'
    ],
    location: [-22.8174239, -47.0675149]
  },
  {
    name: 'From the automated generation of layouts to fabrication with the use of BIM: a new agenda for Architecture in the 21st century',
    year: 2018,
    authors: ['Gabriela Celani', 'Verley Côco'],
    abstract: 'Scripting, BIM e Digital Fabrication já são reconhecidos como habilidades importantes na educação e prática em Arquitetura no século XXI. No entanto, nem sempre são aplicados em conjunto para gerar resultados inovadores para a indústria. Este trabalho parte da observação da dificuldade das fábricas de banheiros pré-fabricados em atender uma demanda de customização em massa e propõe um fluxo de trabalho que vai desde a geração de layouts até a modelagem em BIM e a produção automatizada de documentos para fabricação. Os resultados preliminares demonstram a possibilidade de mudar a cultura de produção em massa de uma indústria, por meio da aplicação do fluxo de trabalho proposto.',
    types: [
      MaterialType.Texto,
      MaterialType.Artigo
    ],
    keywords: [
      'BIM',
      'design digital',
      'programação',
      'automação',
      'fabricação digital',
      'prefabricação',
      'modular'
    ],
    links: [
      'https://www.academia.edu/98085611/From_the_automated_generation_of_layouts_to_fabrication_with_the_use_of_BIM_a_new_agenda_for_Architecture_in_the_21st_century'
    ],
    location: [-22.8174239, -47.0675149]
  },
  {
    name: 'Subdivisão de formas livres em arquitetura com o objetivo de viabilização de sua fabricação: métodos e aplicações',
    year: 2018,
    authors: ['Gabriela Celani', 'Filipe Medeia'],
    abstract: 'Este trabalho apresenta um panorama dos tipos de subdivisão de formas livres utilizados na arquitetura, bem como seus métodos e implementações computacionais, visando, especificamente, a sua aplicação para elementos de vedação. Foi realizada a revisão bibliográfica do assunto, bem como entrevista com especialista e exploração paramétrica dos métodos levantados em geometrias de teste. Desse modo,identificaram-se os principais de cada tipo de subdivisão, visando à viabilização de obras com formas livres,bem como questões de estética e acabamentos.',
    types: [
      MaterialType.Texto,
      MaterialType.Artigo
    ],
    keywords: [
      'contínuo',
      'design digital',
      'design paramétrico',
      'fabricação digital'
    ],
    links: [
      'https://www.academia.edu/98085610/Subdivis%C3%A3o_de_formas_livres_em_arquitetura_com_o_objetivo_de_viabiliza%C3%A7%C3%A3o_de_sua_fabrica%C3%A7%C3%A3o_m%C3%A9todos_e_aplica%C3%A7%C3%B5es'
    ],
    location: [-22.8174239, -47.0675149]
  },
  {
    name: 'Integração de tecnologias CAD/CAE/CAM no ateliê de arquitetura: Uma aplicação no projeto de edifícios altos',
    year: 2017,
    authors: ['Gabriela Celani', 'Ana Maria Monteiro', 'Juarez Moara', 'Victor Calixto'],
    abstract: 'Este artigo descreve uma disciplina de ateliê do 9° semestre do curso de Arquitetura e Urbanismo da Universidade Estadual de Campinas - Unicamp, em que foi adotada uma estratégia de projeto paramétrico e baseado em desempenho para o desenvolvimento de edifícios altos. A disciplina o envolveu o uso de programas de análise ambiental e estrutural, além da modelagem paramétrica e algorítmica como maneira de incorporar os resultados dessas análises à geração da forma. Além disso, a disciplina fez um uso intensivo de equipamentos de fabricação digital para a produção de maquetes. Os resultados obtidos demonstram a importância da presença de uma equipe interdisciplinar de instrutores no ateliê de projeto, além da viabilidade de se produzir ainda que de maneira simplificada, o processo de projeto integrado com o uso de tecnologias CAD/CAE/CAM, que vem se tornando cada vez mais presente nos escritórios de arquitetura',
    types: [
      MaterialType.Texto,
      MaterialType.Artigo
    ],
    keywords: [
      'educação',
      'design digital',
      'design paramétrico',
      'fabricação digital',
      'CAM'
    ],
    links: [
      'https://www.academia.edu/98085608/Integra%C3%A7%C3%A3o_de_tecnologias_CAD_CAE_CAM_no_ateli%C3%AA_de_arquitetura_Uma_aplica%C3%A7%C3%A3o_no_projeto_de_edif%C3%ADcios_altos'
    ],
    location: [-22.8174239, -47.0675149]
  },
  {
    name: '101 Conceitos de Arquitetura e Urbanismo na era digital',
    year: 2017,
    authors: ['Frederico Braida', 'Fernando Lima', 'Juliane Fonseca', 'Vinicius Morais', 'Vários'],
    abstract: 'O livro é uma coleção exemplar de verbetes, escrita e organizada por professores e pesquisadores que são conhecedores das novas tecnologias e conectados com a realidade da academia e do mercado, no Brasil e na América Latina. Como se trata de um guia de referência único em língua portuguesa, acreditamos que ele tem tudo para ser uma indicação "obrigatória" por professores de disciplinas ligadas à tecnologia nas escolas técnicas e faculdades de Arquitetura e Engenharia em todo o país. Texto da Contracapa: "Se o final do século passado ficou marcado pela incorporação da prancheta eletrônica nos ambientes de projeto com a utilização dos programas de CAD, percebe-se, nos dias de hoje, uma maior exploração da tecnologia CAM, a propagação da plataforma BIM, bem como dos recursos CAE e o uso de máquinas CNC, equipamentos controlados por computador, nos meios de produção e concepção arquitetônica. Portanto, há uma mudança não somente do desenho arquitetônico, mas sim uma inovação no próprio processo de projetar. O franco desenvolvimento da lógica CAAD (computer-aided architectural design ou projeto arquitetônico auxiliado por computador) vem revolucionando a tarefa de pensar, projetar e produzir arquitetura.',
    types: [
      MaterialType.Texto,
      MaterialType.Livro
    ],
    keywords: [
      'educação',
      'design digital',
      'design paramétrico',
      'fabricação digital',
      'urbanismo'
    ],
    links: [
      'https://www.academia.edu/98085608/Integra%C3%A7%C3%A3o_de_tecnologias_CAD_CAE_CAM_no_ateli%C3%AA_de_arquitetura_Uma_aplica%C3%A7%C3%A3o_no_projeto_de_edif%C3%ADcios_altos'
    ],
    location: [-22.8174239, -47.0675149]
  },
  {
    name: 'Automated floorplan generation in architectural design: A review of methods and applications',
    year: 2022,
    authors: ['Ramon Elias Weber', 'Caitlin Mueller', 'Christoph Reinhart'],
    abstract: 'Como a produção automatizada de layouts de edifícios - suas plantas baixas, pode impactar positivamente o desenvolvimento de projetos mais eficientes, sustentáveis e acessíveis? Neste texto, os autores investigam, à luz desta pergunta, o atual estado de métodos contemporâneos de produção automatizada de plantas baixas, coletando, classificando e analisando exemplos relevantes. Um bom texto que fornece bons referenciais, principalmente de um ponto de vista técnico, e que busca uma discussão do assunto para além do reacionarismo.',
    types: [
      MaterialType.Texto,
      MaterialType.Artigo
    ],
    keywords: [
      'planta baixa',
      'automação',
      'design generativo',
      'sustentabilidade',
      'machine learning',
      'otimização'
    ],
    links: [
      'https://www.sciencedirect.com/science/article/abs/pii/S0926580522002588?via%3Dihub'
    ]
  }
];

// adiciona os links calculados automaticamente ao acervo
_acervo.forEach(e => { e.address = getLinkAddress(e); });

export const acervo = _acervo;
