/* 
                                Problem:1  radianToDegree
                                Convert radian to degree :------>
*/
function radianToDegree(radian) {
    if (typeof radian === 'number') {
        const pi = 3.141592653589793238;
        const degree = ((180 / pi) * radian).toFixed(2);
        return degree;
    }
    else {
        return 'Please provide valid number';
    }
}

// console.log(radianToDegree(199));


/*
                                 Problem:2  isJavaScriptFile
              Check whether the given file name is a javaScript file or not :------>

*/
function isJavaScriptFile(file) {
    if (typeof file === "string") {
        const jsFile = file.split('.').pop();
        if (jsFile === "js") {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return 'Please provide a valid string';
    }
}

// console.log(isJavaScriptFile(15));


/*
                                 Problem 3: oilPrice
                      Calculate the total oil price that I have to pay :------>
*/
function oilPrice(disel, petrol, octen) {
    if (typeof disel === "number" && typeof petrol === "number" && typeof octen === "number") {
        let totalPrice = ((disel * 114) + (petrol * 130) + (octen * 135));
        return totalPrice;
    }
    else {
        return 'Please provide valid Quantity';
    }
}

// console.log(oilPrice(30, 20, 10));


/*
                                 Problem 4: publicBusFare
                        It will return you the total amount of public bus fare :------>

*/
function publicBusFare(passenger) {
    if (typeof passenger === "number") {
        let reservedBusPassenger = passenger % 50;
        let microBusPassenger = reservedBusPassenger % 11;
        let totalRestBusPassengerRent = microBusPassenger * 250;
        return totalRestBusPassengerRent;
    }
    else {
        return 'Please provide valid number of passenger';
    }
}

// console.log(publicBusFare(365));


/* 
                                Problem 5: isBestFriend
                    I need to take two objects and see if these two are each other's best friends :------>
                    
*/
function isBestFriend(friendList01, friendList02) {
    if (typeof friendList01 === "object" && typeof friendList02 === "object") {
        if (friendList01.name === friendList02.friend && friendList01.friend === friendList02.name) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return 'Please provide the correct object';
    }
}

// console.log(isBestFriend({
//     name: 'abul',
//     friend: 'babul'
// }, {
//     name: 'babul',
//     friend: 'abul'
// }));