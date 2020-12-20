const knockJokes = {
  names: ["Goliath", "Broccoli", "Wooden shoe", "Amish", "Boo"],
  jokes: [
    "Goliath down, you look-eth tired!",
    "Broccoli doesn’t have a last name, silly.",
    "Wooden shoe like to hear another",
    "Really Amish?  You don’t look like a shoe!",
    "Boo! Why are you crying?",
  ],
};

let fullJoke = [];

// Returns a random number
const ranName = knockJokes.names[Math.floor(Math.random() * 5)];

const ranJoke = knockJokes.jokes[Math.floor(Math.random() * 5)];

const jokeGenerator = () => {
  let name;
  let joke;
  console.log("Knock Knock");
  console.log("Who's There?");
  for (let i = 0; i < knockJokes.names.length; i++) {
    name = ranName;
    console.log(name);
    console.log(`${name} Who?`);
    break;
  }
  for (let j = 0; j < knockJokes.jokes.length; j++) {
    joke = knockJokes.jokes[j];
    if (joke.includes(name)) {
      console.log(joke);
    }
  }
};

jokeGenerator();
