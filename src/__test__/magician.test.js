import Magician from '../magician';

test('проверка персонажа-мага', () => {
  const unit1 = new Magician('маг');
  const unit2 = {
    name: 'маг',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(unit1).toEqual(unit2);
});