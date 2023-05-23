import { acervo } from './acervo';

it('acervo contém itens com endereços únicos', () => {
  const len = acervo.length;
  const unique = Array.from(new Set(acervo.map(a => a.address)));
  expect(len).toBe(unique.length);
});
