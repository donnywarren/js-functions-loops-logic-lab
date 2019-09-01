# The JS Gauntlet Lab
Functions, loops, and conditional logic are the core of problem solving in JavaScript. Let's master them! This repository contains a series of mini labs challenging you to write basic JS tools and games.

You can play any of the finished programs here: [Flynn's JS Arcade!](http://js-gauntlet.surge.sh)

To get started, `cd` into your `week-1` folder. Then `mkdir` a folder called `js-practice` and `cd` into that. You'll be doing all of your work inside the `js-practice` folder. 

## Calculator
Let's warm up by making some functions to do basic math.

- In your `js-practice` folder, `touch` files called `index.html` and `calculator.js`
- Set up your boilerplate HTML in `index.html` and connect it to `calculator.js`. You wont need anything in the body of your HTML file.
- Inside `calculator.js`, define an arrow function called `add` that takes two numbers and adds them together. On the first line of this function, do the actual math; on the second line, use `alert()` to print a string that shows both the expression and answer.
- Following this pattern, define functions for `subtract`, `multiply`, and `divide`. 
- Define a function called `calculate`. This function will not need to take any parameters.
- Inside `calculate` use `prompt` to ask the user for the first and second number. store those numbers as variables. 
  - >Hint: Check the data type of your newly collected variables...
- Call `add`, `subtract`, `multiply`, and `divide` using the two numbers you just stored as the arguments for each.
- Below your newly defined function, call `calculate`.
- Open `index.html` in the browser and open the `console` tab of your Chrome Inspector tools. 


<details><summary>Help me with the <code>add</code> function plz!</summary>
  The <code>add</code> function should look something like this:

```js
const add = (num1, num2) => {
  let answer = num1 + num2
  alert(`${num1} + ${num2} = ${answer}`)
}
```
  Based off this, getting the other 3 functions on your own.
</details>


<details><summary>Help me with the <code>calculate</code> function</summary>
  Here is the structure of <code>calculate</code>:

```js
const calculate = () => {
  let num1 = parseInt(prompt("Enter first number:"))
  let num2 = parseInt(prompt("Enter second number:"))
  add(num1, num2)
  subtract(num1, num2)
  multiply(num1, num2)
  divide(num1, num2)
}

calculate()
```

</details>

## Letter Guesser
This is a simple game where you're given a letter and you have to guess its index number.

- In your `js-practice` folder, `touch` a file called `letterGuesser.js`.
- In your `index.html` file, change the `src` or the JavaScript to `letterGuesser.js`.
- In `letterGuesser.js`, define a function called `letterGuesser`.
- Inside your function, create an array of letters from "a" to "z" and save this array to a variable.
- Using `Math.random()`, generate a random number between 0 and the length of your alphabet array. Save this number to a variable.
- Use that random number as an index to select the correlating letter from your alphabet array.
- Using string interpolation and `prompt()`, inform the user what letter they have received, ask the user to guess the letter's index number, and save that guess to a variable.
- Make sure the guess's data type is a number!
- Use conditional logic to check if the user's guess matches the actual index of the random letter. If it does, use `alert()` to tell them that they're a genius at the alphabet; if it doesn't match, tell them that they need to learn their ABCs and use string interpolation to give them the correct answer.
- Call `letter_guesser`.
- Save your work, go to the browser, and refresh to run the file you just created.


The result should look something like this:

```
Your letter is c. Guess c's index number.
2
Whoa! You're like a genius when it comes to the alphabet!
```

```
Prompt: Your letter is z. Guess z's index number.
1 
You lose! Looks like you need to learn your ABC's. The index of z is actually 25.
```


## MadLibs
Remember these? Basically, you blindly fill in a bunch of words in a story, then you read the story and hilarity ensues.

- `Touch` a file called `madlibs.js`.
- In your `index.html` file, change the `src` or the JavaScript to `madlibs.js`.
- Create a function called `madlibs`.
- Using `prompt()` and ask players if they'd like to do story one or story two. 
- Using conditional logic, create three seperate routes based off the user's answer:
  - if they type "one" - they play story one
  - if they type "two" - they play story two
  - if they type anything else, inform them that they need to type "one" or "two", then restart the game.
  
- For story one, save the following prompts to variables: [story one prompts](/story-one-prompts.md)
- Then, using string interpolation, insert the user's responses into the following story: [story one](/story-one.md) and save the story to a variable.

- For story two, save the following prompts to variables: [story two prompts](/story-two-prompts.md)
- Then, using string interpolation, insert the user's responses into the following story: [story two](/story-two.md) and save the story to a variable.

- Use `alert()` to show the resulting story to the user.
- Go to the browser and run the file you just created.

BONUS
- After each story, ask if the user if they'd like to play again.
  - If they answer "yes" restart the game, 
  - If they type "no", thank them for playing and end the game.
  - If they type anything else, ask them again.


## D&D Dice Roll
You're playing Dungeons and Dragons, but you accidentally dropped your 20-sided die underneath the couch before the final battle, and there's a tangled, sticky mess of Cheeto dust, maple syrup (don't ask), and cat hair down there, so there's no way you're picking that thing up.  

No worries! You can just go with the next best solution: writing a program in JavaScript that can figure out your attack rolls for you!

- In your `js-practice` folder, `touch` a file called `dungeons.js`.
- In your `index.html` file, change the `src` or the JavaScript to `dungeons.js`.
- Define a function called `fight`. It doesn't need to take any parameters.
- Use `prompt()` to ask the user the name of the monster they're fighting. Save it to a variable called `monster`.
- Do the same with the hero's name and save it to a variable called `hero`.
- Create variables for `monsterHealth` and `heroHealth`. Set them both to `50`.
- Using a `while` loop, have the hero and monster attack each other in rounds until one of them has a health at or below 0. 
  - Using `Math.random()`, generate a random number between 1 and 20 to represent the hero's dice roll. Save that number to a variable.
  - Do the same for the monster.
  - To decide if the hero and monster hit each other and for how much damage, using the following criteria:
    - If an attacker rolls a 1 or 2, they accidentally stab themselves for 5 damage.
    - If an attacker rolls between 3 and 10, they miss and do 0 damage. 
    - If an attacker rolls between 11 and 18, they hit and do 10 damage.
    - If an attacker rolls a 19 or 20, they get a critical hit and do 20 damage.
  - Use `alert()` with string interpolation after each attack to inform the user what happened and how much of each fighter's health remains.
  - Continue the battle until one of the fighters' health has been reduced to zero. When this happens, use string interpolation to declare the winner and loser by name.
  - Bonus: Add an additional condition in case they kill each other on the final blow!
- Below your newly defined function, invoke `fight()`.
- Go to the browser and run the file you just created.

BONUS
- After each battle, ask if the user if they'd like to play again.
  - If they answer "yes" restart the game, 
  - If they type "no", thank them for playing and end the game.
  - If they type anything else, ask them again.

The end result should look something like this:
```
Name your hero:
David Magicbeard

Name the monster:
Hungover Bri-Guy

Hit! David Magicbeard strikes Hungover Bri-Guy!
Critical failure! Hungover Bri-Guy accidentally stabs self!
David Magicbeard has 50 hitpoints left. Drake on Coffee has 35 hitpoints left.

David Magicbeard misses!
Hit! Hungover Bri-Guy strikes David Magicbeard!
David Magicbeard has 40 hitpoints left. Drake on Coffee has 35 hitpoints left.

Hit! David Magicbeard strikes Hungover Bri-Guy!
Hit! Hungover Bri-Guy strikes David Magicbeard!
David Magicbeard has 30 hitpoints left. Drake on Coffee has 25 hitpoints left.

Critical hit! David Magicbeard does double damage!
Hit! Hungover Bri-Guy strikes David Magicbeard!
David Magicbeard has 20 hitpoints left. Drake on Coffee has 5 hitpoints left.

Hit! David Magicbeard strikes Hungover Bri-Guy!
Hit! Hungover Bri-Guy strikes David Magicbeard!
David Magicbeard has 10 hitpoints left. Drake on Coffee has -5 hitpoints left.

Hungover Bri-Guy has lost to David Magicbeard. The world is safe!... for now.
```

## Finished Early?
Wow! Congrats for surviving the gauntlet! We're genuinely impressed! Let's pass your skills forward:

Create a new challenge and use Slack to send it to your instructor. We'll review it, and if it fits within the scope of our class's current JS knowledge, we'll add it to this list!
