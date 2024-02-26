export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    if (typeof name !== 'string') {
      throw new Error('Значение name не является строкой');
    }

    if (name.length < 2 || name.length > 10) {
      throw new Error('Значение name должно содержать от 2 до 10 символов');
    }

    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!types.includes(type)) {
      throw new Error('Значение type должно содержать одно из типов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
  }
}
