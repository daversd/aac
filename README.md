# AAC - Acervo de Arquitetura Computacional
Este repositório responsável pelo conteúdo do Acervo de Arquitetura Computacional - AAC, disponível [aqui](https://aac.daviddoria.xyz/).   

Está procurando mais informações sobre o que é o Acervo? Veja o [manifesto](https://github.com/daversd/aac/blob/main/src/docs/manifesto.md).

Está procurando mais informações sobre como colaborar? Veja aqui [como colaborar](https://github.com/daversd/aac/blob/main/src/docs/como-colaborar.md).

# Desenvolvimento local
O projeto é desenvolvido majoritariamente em [TypeScript](https://www.typescriptlang.org/) e baseado em [Vite](https://vitejs.dev/) e [React](https://react.dev/). O gerenciador de pacotes de preferência é o [Yarn](https://yarnpkg.com/). A versão do [NodeJs](https://nodejs.org/en) utilizada é `v16` LTS.

Para começar a desenvolver localmente e colaborar com o projeto:
1. Clone o projeto
```bash
git clone https://github.com/daversd/aac.git
```
2. Instale o projeto e suas dependências
```
yarn
```
3. Scripts disponíveis
```bash
yarn build # executa o build do projeto
yarn ts # compila o código e verifica erros de TS, em modo de observação
yarn start # executa o projeto localmente. --host serve o projeto na sua rede
yarn lint # executa o linting no projeto, corrigindo automaticamente o que pode ser corrigido
```
