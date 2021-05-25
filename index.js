function distanceTravelledInFeet(start, end) {
    return (start < end) ? (end - start) * 264 : (start - end) * 264;
  }
  
  function distanceFromHqInBlocks(block) {
    return (block > 42) ? block - 42 : 42 - block;
  }
  
  function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264
  }
  
  function calculatesFarePrice(start, end) {
    const distance = distanceTravelledInFeet(start, end);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }