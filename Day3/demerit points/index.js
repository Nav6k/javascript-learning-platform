//Speed Limit = 70
// 5 -> 1 point
//Math.floor(1.3)
//12 points -> suspended
checkSpeed(175);

function checkSpeed(speed){
const speedLimit = 70;
const kmPerPoints = 5;

if(speed < speedLimit + kmPerPoints)
    console.log('ok');
else{
    const points = Math.floor(speed - speedLimit)/kmPerPoints;
    if(points >= 12)
    console.log('Lisence suspended');
    else
    console.log('points',points);
        
}

}