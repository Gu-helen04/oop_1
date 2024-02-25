import Character from '../app';

test('test_1', () => {
  const character1 = new Character('Spider', 'Magician');
  const result = {
    name: 'Spider',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(character1).toEqual(result);
});

test('test_2', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const hero = new Character('iron Man', 'iron Man');
  }).toThrow('Значение type должно содержать одно из типов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('test_3', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const hero = new Character('S', 'Magician');
  }).toThrow('Значение name должно содержать от 2 до 10 символов');
});

test('test_4', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const hero = new Character(234, 'Magician');
  }).toThrow('Значение name не является строкой');
});
