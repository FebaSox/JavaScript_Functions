//ex 1
function printOdds(count) {
    for (let i = 0; i < count; i++) {
        //Check if I is an odd number
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

//ex 2
printOdds(47);
printOdds(6);

function checkAge(userName, age) {
    //If the username is a falsey value
    //undefined and ""
    if (!userName) {
        //End the function early
    return;
    }
    const aboveSixteen = "Congrats ${userName}! You're not a child :) "
    const belowSixteen = "Sorry ${userName} . . . you. . . are . . . a jitt still you got some growing to do";

    if (age < 16 || !age) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}

checkAge("Seba Fox", 21);
checkAge("Larry Rotter", 15);
checkAge("Shadowheart", 26);

//ex3
