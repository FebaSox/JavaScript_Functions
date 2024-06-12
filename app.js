console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count < 0) {
        count = count * -1;
    }
    console.log(count);
    for (let i = 1; i < count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        } else {
            continue;
        }
    }
    return count
};
let result = printOdds(-10);
console.log(result);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName = "Seba", age = 21) {
    let oldEnoughMsg = `Congrats ${userName}! ,You're not a child`;
    let tooYoungMsg = `Sorry! ${userName} ,You, ARE a child`;
    if (age >= 16) {
        console.log(oldEnoughMsg);
    } else {
        console.log(tooYoungMsg);
    }
}
console.log(checkAge());

//Excercise 3
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x = 0, y = 0) {
    if (x === 0 && y === 0) {
        console.log("This point is at the Orgin.");
    } else if (x === 0) {
        console.log("This point is on the y-axis.");
    } else if (y === 0) {
        console.log("This point is on the y-axis.");
    } else if (x > 0 && y > 0) {
        console.log("This point is in Quadrant 1.");
    } else if (x < 0 && y > 0) {
        console.log("This point is in Quadrant 2.");
    } else if (x < 0 && y < 0) {
        console.log("This is in Quadrant 3.");
    } else if (x > 0 && y < 0) {
        console.log("This is in Quadrant 4.");
    }
    return;
}
whichQuadrant();
whichQuadrant(0, 0);
whichQuadrant(0, 1);
whichQuadrant(1, 0);
whichQuadrant(1, 1);
whichQuadrant(-1, -1);
whichQuadrant(-1, 1);
whichQuadrant(1, -1);

//Excercise 4
console.log("EXERCISE 4:\n==========\n");

function checkTriangle(a, b, c){
    if (a + b > c || a + c <=b || b + c <= a) {
        //Invalid
        return "Invalid Triangle";

    }

    if (a == b && b == c) {
        return "Equillateral Triangle";
    } else if (a != b && a != c && b != c){
        return "Scaline Triangle";
    } 
    else {
        return "I Sauce o Lease Triangle";
    }
}

console.log(checkTriangle(3, 4, 5));
console.log(checkTriangle(3, 3, 5));
console.log(checkTriangle(2, 2, 5));
console.log(checkTriangle(2, 2, 3));

console.log("EXERCISE 5:\n==========\n");

function dataPlan(planLimit, currentDay, usage) {
const daysRemaining = 30 - currentDay;
const dataRemaining = planLimit - usage;
const avgUsageSoFar = usage / planLimit;
const avgIdealUsage = planLimit / 30;
const projectedUsage = avgUsageSoFar * 30;
const projectedDataRemaining = planLimit - (projectedUsage);
const newIdealAvg = dataRemaining / daysRemaining;

console.log (`${day} days used, ${daysRemaining} remaining
Average daily use: ${avgIdealUsage.toFixed(2)}
You are EXCEEDING your average daily use ${avgUsageSoFar},
continuing this high usage, you'll exceed your data plan by
${projectedDataRemaining} GB
To stay below your data plan, use no more than ${newIdealAvg} GB/day.`);
}

dataPlan(100, 15, 56);