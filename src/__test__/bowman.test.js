import Bowman from '../bowman';

test('проверка персонажа-лучника', () => {
  const unit1 = new Bowman('лучник');
  const unit2 = {
    name: 'лучник',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(unit1).toEqual(unit2);
});

