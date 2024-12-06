import Character from '../character';

test('проверка по длине имени', () => {
  const unit1 = () => new Character('1', 'Bowman');
  expect(unit1).toThrow("the character's name must contain letters from 2 to 10 characters");
});

test('проверка по выбору класса', () => {
  const unit1 = () => new Character('unit', 'luchnik');
  expect(unit1).toThrow('Please select one of the available classes: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('проверка основного персонажа', () => {
  const unit1 = new Character('лучник', 'Bowman');
  const unit2 = {
    name: 'лучник',
    type: 'Bowman',
    health: 100,
    level: 1,
  };
  expect(unit1).toEqual(unit2);
});