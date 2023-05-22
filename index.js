function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet)*264
}
function distanceTravelledInFeet(end, start) {
    return Math.abs((end - start) * 264)
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(end, start)
    if(distance > 2500){
        return "Cannot travel that distance"
    } else if (distance > 2000){
        return 25;
    } else if (distance > 400){
        return (distance - 400 )* 0.02
    } else {
        return 0
    }
}