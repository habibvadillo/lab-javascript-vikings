// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      this.isDead = true;
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      this.isDead = true;
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  attack(faction) {
    let attackingArmy = this.vikingArmy;
    let defendingArmy = this.saxonArmy;

    if (faction === "saxon") {
      [attackingArmy, defendingArmy] = [defendingArmy, attackingArmy];
    }

    let attacker =
      attackingArmy[Math.floor(Math.random() * attackingArmy.length)];
    let defender =
      defendingArmy[Math.floor(Math.random() * defendingArmy.length)];

    let result = defender.receiveDamage(attacker.strength);

    if (defender.isDead) {
      defendingArmy.splice(defendingArmy.indexOf(defender), 1);
    }

    return result;
  }
  vikingAttack() {
    return this.attack();
  }
  saxonAttack() {
    return this.attack("saxon");
  }
  showStatus() {
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
