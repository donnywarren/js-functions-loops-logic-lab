const madlibs = () => {
  let choice = prompt('Would you like to do story one or story two?');
  if (choice === one) {

    const adj1 = prompt("type an adjective");
    const place1 = prompt("type a general place");
    const vehicle = prompt("type a vehicle name (plural)");
    const game = prompt("type the name of a game");
    const plural1 = prompt("type a plural noun");
    const verb1 = prompt("type an 'ing' verb");
    const verb2 = prompt("type another 'ing' verb");
    const food = prompt("type a food name (plural)");
    const sport = prompt("type the name of a sport");
    const verb3 = prompt("type another 'ing' verb");
    const emotion = prompt("type an emotion");
    const number = prompt("type a number");

    const storyOne = `A vacation is when you take a trip to some ${adj1} place near an amazing ${place1}.A good vacation place is one where you can ride ${vehicle} or play ${game} or go hunting for ${plural1}.I like to spend my time ${verb1} or ${verb2}.When parents go on a vacation, they spend their time eating three ${food} a day.Usually, fathers play ${sport}, and mothers spend their time ${verb3}.Adults need vacations more than kids because adults are always very ${emotion} because they have to work ${number} hours every day all year just to afford their vacations!`

    alert(storyOne);

  } else if (choice === two) {


    const adj1 = prompt("type an adjective");
    const place = prompt("type a famous place");
    const plural = prompt("type a plural noun");
    const adj2 = prompt("type another adjective");
    const food = prompt("type a food (plural)");
    const emotion = prompt("type an emotion");
    const verb = prompt("type an 'ing' verb");
    const place2 = prompt("type a common place");
    const adj3 = prompt("type another adjective");
    const noun = prompt("type a noun");
    const adj4 = prompt("type another adjective");
    const noun2 = prompt("type another noun");
    const person = prompt("type a family member");
    const adj5 = prompt("type another adjective");

    const storyTwo = `Today we took a ${adj1} fieldtrip to ${place}. They're famous for making ${plural} and for cooking ${adj2} ${food}. Eating all that food made me feel ${emotion}. Next we enjoyed the local tradition of ${verb} in the middle of the ${place2}! Finally, we went shopping for souvenirs. I bought a ${adj3} ${noun} for myself, and a ${adj4} ${noun2} for my favorite ${person}. I'll definitely never forget this ${adj5} trip!`

    alert(storyTwo);

  } else {
    alert('You must type one or two.')
    madlibs();
  }
}

