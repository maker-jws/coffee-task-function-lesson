//makeCoffee
const coffee = {
  origin: "colombian",
  type: "light",
  state: "whole-bean"
};
const water = {
  startTemp: 60,
  temp: 60,
  source: "tap",
  container: null
};
const cup = {
  name: "thrift-store mug",
  type: "container",
  content: [],
  isFull: false
};
const kettle = {
  name: "kettle",
  type: "container",
  content: null,
  isBoiling: false
};
const grinder = {
  name: "grinder",
  type: "tool",
  isGrinding: false,
  isFull: false,
  content: null
};
const coffeePress = {
  name: "coffee press",
  type: "tool",
  hasSteeped: false,
  content: [],
  isFull: false
};
//Defining Processes
function heatWater(liquid, container) {
  kettle.content = liquid;
  const heatingWater = kettle.content;
  if (water.startTemp === heatingWater.temp) {
    liquid.container = kettle.name;
    console.log(
      "You pour the water into the",
      kettle.name,
      "and it starts to heat"
    );
  }
  heatingWater.temp += 1;
  if (heatingWater.temp % 100 === 0) {
    console.log("The water is heating");
  }
  if (heatingWater.temp > 212) {
    console.log("The water is now boiling");
    kettle.isBoiling = true;
  }
  if (kettle.isBoiling && coffee.state === "ground") {
    console.log("The water is ready to pour");
    pourWater(container);
    liquid.container = container;
    steepCoffee(container, cup);
  }
}
function grindCoffee(coffee, container) {
  const cafe = coffee;
  grinder.content = cafe.origin;
  grinder.isFull = true;
  grinder.isGrinding = true;
  console.log("You grind the", cafe.type, "roast", cafe.origin, "coffee");
  cafe.state = "ground";
  pourGrounds(cafe, container);
}
function pourGrounds(coffee, container) {
  if (coffee.state === "ground") {
    grinder.isFull = false;
    grinder.isGrinding = false;
    grinder.content = "empty";
    console.log("You pour the ground beans into the press");
    container.content.push(coffee);
  } else {
    console.log("The beans aren't ready yet");
  }
}
function pourWater(container) {
  console.log("You pour the water into the", container.name);
  container.content.push(kettle.content);
  kettle.content = "empty";
  kettle.isBoiling = false;
}
function steepCoffee(container) {
  if (container.content.length === 2) {
    console.log(
      "The",
      container.content[0].state,
      container.content[0].origin,
      "coffee and the hot water",
      "are in the",
      container.name
    );
    console.log("The coffee will steep for 5 minutes before serving");
    return pourCoffee(container, cup);
  } else {
    console.log("The coffee is not ready to brew");
  }
}
function pourCoffee(content, container) {
  // console.log(content, container, "line 109");
  const brew = content.content[0];
  content.length = 0;
  container.content = "Fresh brewed " + brew.origin + " is in your cup";
  return console.log(container.content);
}
const prepareCoffee = () => {
  grindCoffee(coffee, coffeePress);
  while (water.temp < 213) {
    heatWater(water, coffeePress);
  }
};
prepareCoffee();
