const letterGuesser = () => {
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
  let i = Math.floor(Math.random() * letters.length);
  let guess = parseInt(prompt(`Your letter is ${letters[i]}. Guess ${letters[i]}'s index number.`));
  if (guess === i) {
    alert("Whoa! Your're like a genius when it comes to the alphabet");
  } else {
    alert(`You lose!  Looks like you need to learn your ABC's.  The index of ${letters[i]} is actually ${i}`);
  }

}
letterGuesser();




