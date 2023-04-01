// Speed Limit = 70
// 5 -> 1 point
// 12 points -> suspended

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) return "OK";

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) return "License suspended";
    return points;
}

console.log(checkSpeed(50));
console.log(checkSpeed(70));
console.log(checkSpeed(72));
console.log(checkSpeed(75));
console.log(checkSpeed(77));
console.log(checkSpeed(90));
console.log(checkSpeed(97));
console.log(checkSpeed(180));
