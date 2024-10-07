async function getCrisps() {
  const choice = Math.floor(Math.random() * 2);
  console.log(choice);
  return choice === 0 ? "no" : "yes";
}

async function makeSandwiches() {
  const crisps = await getCrisps();
  if (crisps === "yes") {
    console.log("Plate up the sandwiches");
  } else {
    console.log("Prepare a salad instead.");
  }
}

makeSandwiches();
