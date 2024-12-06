import Zombie from '../zombie';

test('проверка персонажа-зомби', () => {
  const unit1 = new Zombie('зомби');
  const unit2 = {
    name: 'зомби',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(unit1).toEqual(unit2);
});