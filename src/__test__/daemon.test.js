import Daemon from '../daemon';

test('проверка персонажа-демона', () => {
  const unit1 = new Daemon('демон');
  const unit2 = {
    name: 'демон',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(unit1).toEqual(unit2);
});