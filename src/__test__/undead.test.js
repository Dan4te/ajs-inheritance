import Undead from '../undead';

test('проверка персонажа-нежить', () => {
  const unit1 = new Undead('нежить');
  const unit2 = {
    name: 'нежить',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(unit1).toEqual(unit2);
});