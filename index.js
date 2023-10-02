// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42;
    if (someValue > hqLocation) {
        return (someValue - hqLocation)
    }
    else {
        return (hqLocation - someValue)
    }
}

function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    const feetPerBlock = 264;
    return (blocks * feetPerBlock)
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return ((destination - start) * 264)
    }
    else {
        return ((start - destination) * 264)
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
        return 0;
    }
    else if (distance >= 400 && distance <= 2000) {
        return ((distance - 400) * 0.02)
    }
    else if (distance >= 2000 && distance <= 2500) {
        return 25;
    }
    else if (distance >= 2500) {
        return "cannot travel that far"
    }
}