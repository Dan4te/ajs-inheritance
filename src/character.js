export default class Character {
    static typeContainer = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
  
    constructor(name, type) {
      // имя должно быть строкой от 2 до 10 символов
      if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
        this.name = name;
      } else {
        throw new Error("the character's name must contain letters from 2 to 10 characters");
      }
      // тип должен быть один из 6-ти предложенных
      if (Character.typeContainer.includes(type)) {
        this.type = type;
      } else {
        throw new Error('Please select one of the available classes: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
      }
      this.health = 100;
      this.level = 1;
    }
  }