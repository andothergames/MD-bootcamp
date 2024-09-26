const bus = [
  "Ryan",
  "Brandon",
  "Rebecca",
  "Richard",
  "Jessica",
  "Brian",
  "Antoinne",
  "Grace",
  "Zee",
  "Ibrahim",
];
console.log(bus);

// Ibrahim feels unwell and asks if he can sit at the back of the bus. Move Ibrahim to the back.
bus.unshift(bus.pop());
console.log(bus);

// Rebecca is singing and upsetting the rest. To resolve this, move Rebecca to the front of the bus.
bus.splice(bus.indexOf("Rebecca"), 1);
bus.push("Rebecca");
console.log(bus);

//Richard and Antoinne are best friends and are talking loudly across the bus. The teacher has decided it's best to separate them. Move Richard to sit behind Antoinne.
const studentToMove = bus.splice(bus.indexOf("Richard"), 1).toString();
bus.splice(bus.indexOf("Antoinne") + 1, 0, studentToMove);
console.log(bus);

//Ryan wants to sit at the front where he can enjoy the trip more. However, Rebecca must remain right at the front. Rearrange the array to move Ryan directly behind Rebecca.
const newPosition = bus.indexOf("Rebecca") - 1;
bus.splice(bus.indexOf("Ryan"), 1);
bus.splice(newPosition, 0, "Ryan");
console.log(bus);
