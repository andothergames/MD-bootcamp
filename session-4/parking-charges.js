const calculateParkingCharge = (hour) => {
  if (hour >= 0 && hour < 5) {
    return 300;
  }
  if (hour >= 5 && hour < 10) {
    return 350;
  }
  if (hour >= 10 && hour < 15) {
    return 500;
  }
  if (hour >= 15 && hour < 20) {
    return 700;
  }
  if ((hour) => 20 && hour < 24) {
    return 400;
  }
};
