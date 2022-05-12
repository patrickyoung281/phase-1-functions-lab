
function distanceFromHqInBlocks (location) {
    return Math.abs(42 - location)
};

function distanceFromHqInFeet (location) {
    return distanceFromHqInBlocks(location)*264
}

function distanceTravelledInFeet (start, end) {
    return Math.abs((start-end)*264)
};

function calculatesFarePrice (start, end) {
    const distance = Math.abs(start-end)*264
    if (distance <= 400) {
        return 0
    }
    else if (distance > 400 && distance < 2000) {
        return (distance - 400)*0.02
    }
    else if (distance >2000 && distance <2500) {
        return 25
    }
    else if (distance > 2500) {
        return "cannot travel that far"
    }
}



































/*
function distanceFromHqInBlocks (Street) {
    return Math.abs(Street - 42)
};

function distanceFromHqInFeet (Street) {
    return distanceFromHqInBlocks(Street) * 264 
};

function distanceTravelledInFeet (Start, End) {
    return Math.abs(Start-End)*264
};


function calculatesFarePrice (Start, End) { 
    if ((Math.abs(Start-End)*264) <= 400) {
        return 0}
    else if ((Math.abs(Start-End)*264) >400 && (Math.abs(Start-End)*264) < 2000) {
    return (Math.abs((Start-End)*264)-400)*0.02}
    else if ((Math.abs(Start-End)*264) > 2000 && (Math.abs(Start-End)*264) < 2500) {
        return 25}
    else if ((Math.abs(Start-End)*264) > 2500) {
        return "cannot travel that far"}
};

/*

function calculatesFarePrice (Start, End) {
    if (distanceTravelledInFeet <= 400) {
        return 0}
};

*/