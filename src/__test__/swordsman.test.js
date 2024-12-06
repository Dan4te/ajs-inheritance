import Swordsman from '../swordsman';

test('проверка персонажа-мечника', () => {
  const unit1 = new Swordsman('мечник');
  const unit2 = {
    name: 'мечник',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(unit1).toEqual(unit2);
});