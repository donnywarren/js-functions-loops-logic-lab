const fight = () => {
  let monster = prompt("Choose a name for the monster:");
  let hero = prompt("Chose a name for your hero:");
  let monsterHealth = 50;
  let heroHealth = 50;

  while (heroHealth >= 0 && monsterHealth >= 0) {
    let heroDamage = Math.ceil(Math.random() * 20);
    let monsterDamage = Math.ceil(Math.random() * 20);

    if (heroDamage <= 2) {
      heroHeath = heroHealth - 5;
      alert(`${hero} accidentally stabbed her/his self.`);

    } else if (heroDamage >= 3 && heroDamage <= 10) {
      monsterHeath = monsterHealth - 0;
      alert(`${hero} missed.`);

    } else if (heroDamage >= 11 && heroDamage <= 18) {
      monsterHealth = monsterHealth - 10;
      alert(`${hero} struck a solid blow.`);

    } else {
      monsterHealth = monsterHealth - 20;
      alert(`${hero} is an idiot and stabbed his/her self.`);

    };

    if (monsterDamage <= 2) {
      monsterHeath = monsterHealth - 5;
      alert(`${monster} accidentally stabbed her/his self.`);

    } else if (monsterDamage >= 3 && monsterDamage <= 10) {
      heroHeath = heroHealth - 0;
      alert(`${monster} missed.`);

    } else if (monsterDamage >= 11 && monsterDamage <= 18) {
      heroHeath = heroHealth - 10;
      alert(`${monster} struck a solid blow.`);

    } else {
      monsterHeath = monsterHealth - 20;
      alert(`${monster} is an idiot and stabbed his/her self.`);

    };

  };

  if (heroHealth > monsterHealth) {
    alert(`${hero} has won!!`)

  } else {
    alert(`${monster} has won!!`)
  };

};

fight();

